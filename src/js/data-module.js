
// contains variables related data
// JSON object for North Carolina State Universities
var nc_universities_json = {
	"nc_universities":[
		{
			"name": "Appalachian State University",
			"schoolid": 297486,
			"geolocation": { "lati": 36.213843, "longi": -81.678621 }
		},
		{
			"name": "East Carolina University",
			"schoolid": 89488,
			"geolocation": { "lati": 35.602, "longi": -77.368 }
		},
		{
			"name": "Elizabeth City State University",
			"schoolid": 428132,
			"geolocation": { "lati": 36.2812, "longi": -76.21512 }
		},
		{
			"name": "Fayetteville State University",
			"schoolid": 524216,
			"geolocation": { "lati": 35.072, "longi": -78.8945 }
		},
		{
			"name": "North Carolina Agricultural and Technical State University",
			"schoolid": 524231,
			"geolocation": { "lati": 36.075352, "longi": -79.773628 }
		},
		{
			"name": "North Carolina Central University",
			"schoolid": 419953,
			"geolocation": { "lati": 35.974167, "longi": -78.898611 }
		},
		{
			"name": "North Carolina State University",
			"schoolid": 72544,
			"geolocation": { "lati": 35.786, "longi": -78.682 }
		},
		{
			"name": "University of North Carolina at Asheville",
			"schoolid": 166156,
			"geolocation": { "lati": 35.61619, "longi": -82.56614 }
		},
		{
			"name": "University of North Carolina at Chapel Hill",
			"schoolid": 89510,
			"geolocation": { "lati": 35.908333, "longi": -79.05 }
		},
		{
			"name": "University of North Carolina at Charlotte",
			"schoolid": 409849,
			"geolocation": { "lati": 35.303566, "longi": -80.732381 }
		},
		{
			"name": "University of North Carolina at Greensboro",
			"schoolid": 77958,
			"geolocation": { "lati": 36.0695, "longi": -79.8114 }
		},
		{
			"name": "University of North Carolina at Pembroke",
			"schoolid": 406342,
			"geolocation": { "lati": 34.6876, "longi": -79.202 }
		},
		{
			"name": "University of North Carolina at Wilmington",
			"schoolid": 412677,
			"geolocation": { "lati": 34.2266, "longi": -77.878047 }
		},
		{
			"name": "University of North Carolina School of the Arts",
			"schoolid": 524243,
			"geolocation": { "lati": 36.0755, "longi": -80.2364 }
		},
		{
			"name": "Western Carolina University",
			"schoolid": 200582,
			"geolocation": { "lati": 35.309722, "longi": -83.183333 }
		},
		{
			"name": "Winston-Salem State University",
			"schoolid": 524237,
			"geolocation": { "lati": 36.089455, "longi": -80.22516 }
		}
	]
};


// list of marker image file locations
var marker_image_list = [
	"dist/image/blue-pushpin.png",
	"dist/image/brn-pushpin.png",
	"dist/image/dark-blue-pushpin.png",
	"dist/image/dark-brn-pushpin.png",
	"dist/image/dark-grn-pushpin.png",
	"dist/image/gold-pushpin.png",
	"dist/image/ltblu-pushpin.png",
	"dist/image/ltgrn-pushpin.png",
	"dist/image/pink-pushpin.png",
	"dist/image/purple-pushpin.png",
	"dist/image/red-pushpin.png",
	"dist/image/ylw-pushpin.png"
	];


// function to populate marker image list
// based on number of universities in
// JSON object
// var marker_image_display_list = [];
// function populate_marker_image_display_list() {
// 	image_index = 0;
// 	for (var index = 0; index < nc_universities_json.nc_universities.length; index++) {
// 		marker_image_display_list.push(marker_image_list[image_index]);
// 		if (image_index < marker_image_list.length - 1) {
// 			image_index++;
// 		} else {
// 			image_index = 0;
// 		}
// 	}
// }

var nc_universities_json_ORG = {
	"nc_universities":[
		{
			"name": "Appalachian State University", "city": "Boone", "enrollments": 17589, "founded": 1899,
			"geolocation": { "lati": 36.213843, "longi": -81.678621 }
		},
		{
			"name": "East Carolina University", "city": "Greenville", "enrollments": 26946, "founded": 1907,
			"geolocation": { "lati": 35.602, "longi": -77.368 }
		},
		{
			"name": "Elizabeth City State University", "city": "Elizabeth City", "enrollments": 2878, "founded": 1891,
			"geolocation": { "lati": 36.2812, "longi": -76.21512 }
		},
		{
			"name": "Fayetteville State University", "city": "Fayetteville", "enrollments": 6060, "founded": 1867,
			"geolocation": { "lati": 35.072, "longi": -78.8945 }
		},
		{
			"name": "North Carolina Agricultural and Technical State University", "city": "Greensboro", "enrollments": 10636, "founded": 1891,
			"geolocation": { "lati": 36.075352, "longi": -79.773628 }
		},
		{
			"name": "North Carolina Central University", "city": "Durham", "enrollments": 8604, "founded": 1909,
			"geolocation": { "lati": 35.974167, "longi": -78.898611 }
		},
		{
			"name": "North Carolina State University", "city": "Raleigh", "enrollments": 34340, "founded": 1887,
			"geolocation": { "lati": 35.786, "longi": -78.682 }
		},
		{
			"name": "University of North Carolina at Asheville", "city": "Asheville", "enrollments": 3751, "founded": 1927,
			"geolocation": { "lati": 35.61619, "longi": -82.56614 }
		},
		{
			"name": "University of North Carolina at Chapel Hill", "city": "Chapel Hill", "enrollments": 29282, "founded": 1789,
			"geolocation": { "lati": 35.908333, "longi": -79.05 }
		},
		{
			"name": "University of North Carolina at Charlotte", "city": "Charlotte", "enrollments": 27238, "founded": 1946,
			"geolocation": { "lati": 35.303566, "longi": -80.732381 }
		},
		{
			"name": "University of North Carolina at Greensboro", "city": "Greensboro", "enrollments": 18516, "founded": 1891,
			"geolocation": { "lati": 36.0695, "longi": -79.8114 }
		},
		{
			"name": "University of North Carolina at Pembroke", "city": "Pembroke", "enrollments": 6269, "founded": 1887,
			"geolocation": { "lati": 34.6876, "longi": -79.202 }
		},
		{
			"name": "University of North Carolina at Wilmington", "city": "Wilmington", "enrollments": 13733, "founded": 1947,
			"geolocation": { "lati": 34.2266, "longi": -77.878047 }
		},
		{
			"name": "University of North Carolina School of the Arts", "city": "Winston-Salem", "enrollments": 808, "founded": 1963,
			"geolocation": { "lati": 36.0755, "longi": -80.2364 }
		},
		{
			"name": "Western Carolina University", "city": "Cullowhee", "enrollments": 9608, "founded": 1889,
			"geolocation": { "lati": 35.309722, "longi": -83.183333 }
		},
		{
			"name": "Winston-Salem State University", "city": "Winston-Salem", "enrollments": 5689, "founded": 1892,
			"geolocation": { "lati": 36.089455, "longi": -80.22516 }
		}
	]
};
