module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            dev: ['*.js', 'public/js/*.js']
        },
        
        less: {
            dev: {
                files: {
                    "public/css/main.css": "public/less/main.less"
                }
            }
        },
        watch: {
            less: {
                files: 'public/less/main.less',
                tasks: 'less:dev'
            }
        }
    });

    [
        'grunt-contrib-jshint',
        'grunt-contrib-less',
        'grunt-contrib-watch'
    ].forEach(function (task) {
        grunt.loadNpmTasks(task);
    });

    // Default task(s).
    grunt.registerTask('default', ['jshint:dev', 'less:dev', 'watch:less']);
    grunt.registerTask('lezz', ['less:dev']);

};