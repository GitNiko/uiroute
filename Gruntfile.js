module.exports = function(grunt) {
  // Porject configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      }
      // build: {
      //   // src: 'src/<%= pkg.name %>.js',
      //   src: 'index.js',
      //   dest: 'index.min.js'
      // }
    }, 
    jshint: {
      options: {
        eqnull: true
      },
      all: [
            'Gruntfile.js',
            'src/js/*.js'
           ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['uglify', 'jshint']);
};