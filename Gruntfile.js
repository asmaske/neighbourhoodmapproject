module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js',
              'src/**/map-app-wikipedia.js',
              'src/**/map-app-collegescorecard.js',
              'src/**/data-module.js',
              'src/**/map-module.js']
    },

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/map-app-wikipedia.min.js': 'src/js/map-app-wikipedia.js',
          'dist/js/map-app-collegescorecard.min.js': 'src/js/map-app-collegescorecard.js',
          'dist/js/data-module.min.js': 'src/js/data-module.js',
          'dist/js/map-module.min.js': 'src/js/map-module.js'
        }
      }
    },

    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/styles.min.css': 'src/css/styles.css'
        }
      }
    },

    copy: {
      main: {
        files: [
              {src: ['src/css/bootstrap.min.css'], dest: 'dist/css/bootstrap.min.css', filter: 'isFile'},
              {src: ['src/js/bootstrap.min.js'], dest: 'dist/js/bootstrap.min.js', filter: 'isFile'},
              {src: ['src/js/jquery-3.1.1.min.js'], dest: 'dist/js/jquery-3.1.1.min.js', filter: 'isFile'},
              {src: ['src/js/knockout-3.4.1.js'], dest: 'dist/js/knockout-3.4.1.js', filter: 'isFile'},

              {src: ['src/image/blue-pushpin.png'], dest: 'dist/image/blue-pushpin.png', filter: 'isFile'},
              {src: ['src/image/brn-pushpin.png'], dest: 'dist/image/brn-pushpin.png', filter: 'isFile'},
              {src: ['src/image/dark-blue-pushpin.png'], dest: 'dist/image/dark-blue-pushpin.png', filter: 'isFile'},
              {src: ['src/image/dark-brn-pushpin.png'], dest: 'dist/image/dark-brn-pushpin.png', filter: 'isFile'},
              {src: ['src/image/dark-grn-pushpin.png'], dest: 'dist/image/dark-grn-pushpin.png', filter: 'isFile'},
              {src: ['src/image/gold-pushpin.png'], dest: 'dist/image/gold-pushpin.png', filter: 'isFile'},
              {src: ['src/image/ltblu-pushpin.png'], dest: 'dist/image/ltblu-pushpin.png', filter: 'isFile'},
              {src: ['src/image/ltgrn-pushpin.png'], dest: 'dist/image/ltgrn-pushpin.png', filter: 'isFile'},
              {src: ['src/image/pink-pushpin.png'], dest: 'dist/image/pink-pushpin.png', filter: 'isFile'},
              {src: ['src/image/purple-pushpin.png'], dest: 'dist/image/purple-pushpin.png', filter: 'isFile'},
              {src: ['src/image/red-pushpin.png'], dest: 'dist/image/red-pushpin.png', filter: 'isFile'},
              {src: ['src/image/ylw-pushpin.png'], dest: 'dist/image/ylw-pushpin.png', filter: 'isFile'},

              {src: ['src/fonts/glyphicons-halflings-regular.eot'],
                      dest: 'dist/fonts/glyphicons-halflings-regular.eot', filter: 'isFile'},
              {src: ['src/fonts/glyphicons-halflings-regular.ttf'],
                      dest: 'dist/fonts/glyphicons-halflings-regular.ttf', filter: 'isFile'},
              {src: ['src/fonts/glyphicons-halflings-regular.woff2'],
                      dest: 'dist/fonts/glyphicons-halflings-regular.woff2', filter: 'isFile'},
              {src: ['src/fonts/glyphicons-halflings-regular.svg'],
                      dest: 'dist/fonts/glyphicons-halflings-regular.svg', filter: 'isFile'},
              {src: ['src/fonts/glyphicons-halflings-regular.woff'],
                      dest: 'dist/fonts/glyphicons-halflings-regular.woff', filter: 'isFile'}
              ]
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // ============= // CREATE TASKS ========== //
  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'copy']);

};