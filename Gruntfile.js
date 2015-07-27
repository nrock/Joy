module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        root: 'assets/',
        concat: {
            dist: {
                src: [
                    'assets/vendors/*.js',
                    '<%= root %>/js/*.js'
                ],
                dest: 'build/assets/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            build: {
                src: 'build/assets/js/<%= pkg.name %>.js',
                dest: 'build/assets/js/<%= pkg.name %>.min.js'
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
        },


        log: {
            foo: [1,2,3,5,8],
            bar: 'Hello world',
            baz: false
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.log.write('This is a sample project to learn grunt');
    grunt.registerTask('default', 'Run all tasks', ['clean', 'concat', 'sass', 'uglify', 'imagemin', 'watch']);

    grunt.registerMultiTask('log', 'Log whatever', function () {
        grunt.log.writeln(this.target + ': ' + this.data);
    });

    grunt.registerMultiTask('log', 'Log arguments', function (arg0, arg1) {
        grunt.log.writeln(this.target + ': ' + arg0 + ' ' + arg1);
        grunt.log.writeln(this.target + ': ' + Array.prototype.join.call(arguments, '-----'));
    });

    grunt.registerTask('custom', 'My task to run other sub-tasks', function () {
        grunt.task.run('clean');
        grunt.task.run('concat');
    });

    grunt.registerTask('fail', 'This task is failed by returning false', function () {
        return false;
    });

    grunt.registerTask('require', 'This task require the task `fail` to finish first', function () {
        grunt.task.requires('fail');
        grunt.log.writeln('Hello, requires');
        // $ grunt require
        // Warning: Required task "fail" must be run first. Use --force to continue.
        // $ grunt fail require
        // Warning: Task "fail" failed. Use --force to continue.
    })
};
