module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'assets/js/*.js',
                    'assets/vendors/*.js'
                ],
                dest: 'build/assets/js/main.js'
            }
        },
        uglify: {
            build: {
                src: 'build/assets/js/main.js',
                dest: 'build/assets/js/main.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['**/*.{jpg,png,gif,svg}'],
                    dest: 'build/assets/images'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['assets/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['assets/sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/assets/sass/base.css': 'assets/sass/base.sass'
                }
            }
        },
        clean: {
            build: ['build/'],
            options: { 
                force: true
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'concat', 'sass', 'uglify', 'imagemin', 'watch']);
};
