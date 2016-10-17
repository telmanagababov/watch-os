/*globals require*/
module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-rollup");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({
        copy: {
            development: {
                files: [
                    {expand: true, flatten: true, src: ["components/**/*.jpg"], dest: "dist/assets", filter: "isFile"},
                    {expand: true, flatten: true, src: ["components/**/*.png"], dest: "dist/assets", filter: "isFile"},
                    {expand: true, flatten: true, src: ["components/**/*.ico"], dest: "dist/assets", filter: "isFile"},
                    {expand: true, flatten: true, src: ["components/**/*.tmpl"], dest: "dist/templates", filter: "isFile"},
                    {expand: true, flatten: true, src: ["index.html"], dest: "dist", filter: "isFile"},
                ],
            },
        },

        less: {
            development: {
                files: {
                    "dist/assets/main.css": ["assets/*.less", "components/**/*.less"]
                }
            }
        },

        rollup: {
            options: {
                plugins: [
                    require("rollup-plugin-babel")({
                        exclude: "node_modules/**"
                    })
                ],
                cache: true
            },
            development: {
                files: {
                    "dist/script/main.js": ["index.js"]
                }
            }
        },
        
        watch: {
            development: {
                files: ["index.js", "index.html", "utils/**/*", "components/**/*"],
                tasks: ["default"]
            },
            js: {
                files: ["index.js", "MainController.js", "utils/**/*", "components/**/*.js"],
                tasks: ["rollup"]
            },
            css: {
                files: ["assets/**/*.less", "components/**/*.less"],
                tasks: ["less"]
            },
            options: {
                spawn: false,
                reload: true
            }
        }
    });

    grunt.registerTask("default", ["rollup", "less", "copy"]);
};