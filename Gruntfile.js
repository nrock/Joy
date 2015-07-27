module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'assets/js/*.js',
                    'assets/vendors/*.js'
                ],
                dest: 'build/assets/main.js'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
};
