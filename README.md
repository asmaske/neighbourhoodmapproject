# Neighbourhood Map project

Neighbourhood Map project is a Javascript based web project.


### Tech

The project uses the following software:

* [Nodejs](nodejs.org) - Javascript runtime
* [Knockoutjs](knockoutjs) - Dynamic UIs
* [Bootstrap](getbootstrap.com) - Front end framework
* [Grunt](gruntjs.com) - Javascript task runner

The project uses the following REST apis:

* [College Score Card](https://api.data.gov/ed/collegescorecard/v1/schools.json)

## Project Details
### 1. Prerequites
+ **Nodejs** (required to install Grunt tool)
+ run **npm install -g grunt-cli** to install grunt packages

### 2. Setup
+ Clone the Neighbourhood Map repo
+ Change directory to Neighbourhood Map location
+ run command **grunt** to build the project files
+ **grunt** creates the minified version of Javascript files and copies all the source files to destination folder 

### 3. Running the application
+ Open **index-collegescorecard.html** file in browser
+ Web page displays list of North Carolina state colleges
+ Google map is displayed with location of colleges using markers
+ User can filter the list using search box
+ The list gets filtered dynamically as the user inputs search value
+ The markers are also dynamically added/removed based on search value
+ Clicking the marker displays WindowInfo box with data about the college
    
### 4. Directory Structure
* catalog
    + README.md
    + Gruntfile.js
    + package.json
    + index-collegescorecard.html
    + dist (files copied here by Grunt tool)
        + css
        + fonts
        + image
        + js
    + src
        + css
            + bootstrap.min.css
            + styles.css
        + fonts
            + glyphicons-halflings-regular.eot
            + glyphicons-halflings-regular.ttf
            + glyphicons-halflings-regular.woff2
            + glyphicons-halflings-regular.svg
            + glyphicons-halflings-regular.woff
        + image
            + blue-pushpin.png
            + brn-pushpin.png
            + dark-blue-pushpin.png
            + dark-brn-pushpin.png
            + dark-grn-pushpin.png
            + gold-pushpin.png
            + ltblu-pushpin.png
            + ltgrn-pushpin.png
            + pink-pushpin.png
            + purple-pushpin.png
            + red-pushpin.png
            + ylw-pushpin.png
        + js
            + map-app-collegescorecard.js
            + map-module.js
            + data-module.js
            + bootstrap.min.js
            + jquery-3.1.1.min.js
            + knockout-3.4.1.js
