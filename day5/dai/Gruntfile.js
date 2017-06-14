module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            html:{
                files: [ 'html/**',  'html/main/**'],
                tasks: ['includes']
            },
            css:{
                files: [ 'css/scss/**'],
                tasks: ['sass']
            }
        },

        sass: {
            dev: {
                files: {
                    'css/style.css': 'css/scss/style.scss'
                }
            }
        },

        includes: {
            build: {
                cwd: 'html',
                src: ['*.html'],
                dest: '.',
                options: {
                    flatten: true,
                    includePath: 'html/pages',
                    banner: '<!-- Site built using grunt includes! -->\n'
                }
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    notify: false,
                    server: './'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-includes');

    // Default task(s).
    // grunt.registerTask('default', ['browserSync', 'sass']);
    // grunt.registerTask('default', ['includes']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};