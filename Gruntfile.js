/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      functional_test: {
        src: ['functional-test/**/*.js', '!functional-test/resources/**/*']
      }
    },
    watch: {
      source: {
        files: [
          '<%= jshint.gruntfile.src %>',
          '<%= jshint.functional_test.src %>',
          'functional-test/**/*.html'],
        tasks: ['default']
      }
    },
    jsvalidate: {
      files: ['<%= jshint.gruntfile.src %>', '<%= jshint.functional_test.src %>']
    },
    funcunit: {
      urls: ['functional-test/funcunit.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsvalidate');
  grunt.loadNpmTasks('grunt-funcunit');

  // Default task.
  /* 
    Function: grunt
  */
  grunt.registerTask('default', ['jsvalidate', 'jshint', 'funcunit']);

};
