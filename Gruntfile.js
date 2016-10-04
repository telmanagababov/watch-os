/*globals require*/
module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-rollup");
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({
        copy: {
            development: {
                files: [
                    {expand: true, flatten: true, src: ["components/**/*.jpg"], dest: "dist/assets", filter: "isFile"},
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

        babel: {
            options: {
                sourceMap: true,
                presets: ["es2015"]
            },
            development: {
                files: {
                    "dist/script/main.js": "index.js"
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
            files: ["index.js", "components/**/*.js"],
            tasks: ["rollup"],
            options: {
                spawn: false,
                reload: true
            }
        }
    });

    grunt.registerTask("default", ["rollup", "less", "copy"]);
};