
// contains variables and functions for MAP
// fucntion map not loading error
function googleError() {
    alert("Error! Map won't load!");
}

// marker animation
function toggleBounce(marker) {

    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
        marker.setAnimation(null);
    }, 2000);
}

// functions to set up marker info display
function get_collegescorecard_info_data_in_html_form(p_data) {

    var csc_marker_display = [];
    var info_school_id = p_data.results[0].id;
    var info_website = p_data.results[0].school.school_url; 
    var info_city = p_data.results[0].school.city;
    var info_state = p_data.results[0].school.state;
    var info_zip = p_data.results[0].school.zip; 
    var info_latitude = p_data.results[0].location.lon;
    var info_longitude = p_data.results[0].location.lat;

    csc_marker_display.push('<table style="width: 100%;">');
    csc_marker_display.push('<tr>');
    csc_marker_display.push('<td style="color:green;font-weight:bold;">School Id</td>');
    csc_marker_display.push('<td style="font-weight:bold;">' + info_school_id + '</td>');
    csc_marker_display.push('</tr>');
    csc_marker_display.push('<tr>');
    csc_marker_display.push('<td style="color:green;font-weight:bold;">Website</td>');
    csc_marker_display.push('<td style="font-weight:bold;">' + info_website + '</td>');
    csc_marker_display.push('</tr>');
    csc_marker_display.push('<tr>');
    csc_marker_display.push('<td style="color:green;font-weight:bold;">Location</td>');
    csc_marker_display.push('<td style="font-weight:bold;">' + info_city +
                             ', ' + info_state + ', ' + info_zip + '</td>');
    csc_marker_display.push('</tr>');
    csc_marker_display.push('<tr>');
    csc_marker_display.push('<td style="color:green;font-weight:bold;">Geo Location</td>');
    csc_marker_display.push('<td style="font-weight:bold;">' + info_latitude + ', ' + info_longitude + '</td>');
    csc_marker_display.push('</tr>');
    csc_marker_display.push('</table>');

    return csc_marker_display;
}

function get_wikipedia_info_data_in_html_form(p_data, p_school_id) {
    var wiki_marker_display = [];

    var marker_info_data_str = JSON.stringify(p_data.query.pages[p_school_id].revisions[0]);

    // split array to get each table row data
    var split_array = marker_info_data_str.split('<tr><th ');
    wiki_marker_display.push('<table style="width: 100%;">');

    // first row is school id info
    wiki_marker_display.push('<tr>');
    wiki_marker_display.push('<td style="color:green;font-weight:bold;">School Id</td>');
    wiki_marker_display.push('<td style="font-weight:bold;">' + p_school_id + '</td>');
    wiki_marker_display.push('</tr>');

    // implemented this logic to remove html data which contains image files
    // no need to have all image files locally...since different info is different based on university
    for (var idx = 0; idx < split_array.length; idx++) {
        if (idx === 0) {
            continue; // skip the array with image files
        } else if (idx >= 1 && idx <= 10) {
            // since array count is different for different universities
            // limiting only to first 15 to be displayed as part of table data
            wiki_marker_display.push('<tr><th ');
            // remove '\n'
            var replaced_arr = split_array[idx].replace(/\\n/g,'');
            wiki_marker_display.push(replaced_arr);
        }
    }
    wiki_marker_display.push('</table>');
    
    return wiki_marker_display;
}
