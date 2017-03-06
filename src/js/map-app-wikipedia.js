    var google_map;
    var north_carolina = {lat: 36.1476357, lng: -80.7142321};
    var zoom_level = 7;

    function initMap() {
        // center map to location
        google_map = new google.maps.Map(document.getElementById('map'), {
        center: north_carolina,
        zoom: zoom_level
        });

    // University fields
    var University = function(p_name, lati, longi, image, p_display_flag, p_school_id) {
        var self = this;
        this.name = p_name;
        this.latitude = lati;
        this.longitude = longi;
        this.marker_image = image;
        this.display_flag = p_display_flag;
        this.school_id = p_school_id;

        // display markers
        this.marker = new google.maps.Marker({
            position: new google.maps.LatLng(self.latitude, self.longitude),
            map: google_map,
            icon: self.marker_image,
            animation: google.maps.Animation.DROP,
            title: self.name,
            visible: self.display_flag,
        });


        // Get university information to be displayed in the infowindow using wikipedia API
        this.getDataWikipedia = function() {

            // call wikipedia API to access university data
            var url_prefix = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&rvsection=0&rvparse=1&origin=*';
            var title_search = self.name.replace(/ /g, '_');
            var url_titles = '&titles=' + title_search;
            var url = url_prefix + url_titles;

            var marker_info_data = [];

            $.getJSON( url, function(data) {

                // call function to form html table data
                marker_info_data = get_wikipedia_info_data_in_html_form(data, self.school_id);

            }).done(function() {

                if (marker_info_data.length === 0) {
                    self.content = '<h4 style="display:inline;">' + '<ol>Sorry no data for this university</ol>';
                } else {
                       self.content = '<h4 style="color:blue;">'+self.name+'</h4>' +
                                        marker_info_data;
                } 
            }).fail(function(jqXHR, textStatus, errorThrown) {

                self.content = '<h4 style="color:blue;">'+self.name+'</h4>' +
                        '<h5>There was a problem retrieving date for this location</h5>';

            });
        }();

        this.infowindow = new google.maps.InfoWindow();

        // Open info window for marker.      
        this.openInfowindow = function() {
            for (var i = 0; i < view_model.universities.length; i++) {
                view_model.universities[i].infowindow.close();
            }
            google_map.panTo(self.marker.getPosition());
            toggleBounce(self.marker);
            self.infowindow.setContent(self.content);
            self.infowindow.open(google_map, self.marker);
        };

        // Assign click event listener
        this.addListener = google.maps.event.addListener(self.marker, 'click', (this.openInfowindow));
    };

    // process university JSON data
    var univ_data = ko.utils.arrayMap(nc_universities_json.nc_universities, function(university, index) {
        // get mod of current index and total elements in image list
        image_index = index % marker_image_list.length;

        // set values for new University object
        return new University(university.name,
            university.geolocation.lati,
            university.geolocation.longi,
            new google.maps.MarkerImage(marker_image_list[image_index]),
            true,
            university.schoolid);
    });

    // create view model
    var view_model = {

        universities: univ_data,

        query: ko.observable(''),
    };

    // function to filter list based on name
    view_model.search = ko.computed(function() {
        var self = this;
        var search = this.query().toLowerCase();

        if (search === 0) {
            return ko.utils.arrayFilter(view_model);
        } else {
            return ko.utils.arrayFilter(self.universities, function(university) {
                isMatched = university.name.toLowerCase().indexOf(search) >= 0;
                if (isMatched) {
                    // if matched, show marker
                    university.marker.setVisible(true);
                } else {
                    // don't show marker if not matched
                    university.marker.setVisible(false);
                }
                return isMatched;
            });
        }
    }, view_model);

    ko.applyBindings(view_model);
}

