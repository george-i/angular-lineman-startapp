/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
    //Override file patterns here
    return {
        js: {
            vendor: [
                "vendor/js/**/*.js",
                "vendor/bower/jquery/dist/jquery.js",
                "vendor/bower/angular/angular.js",
                "vendor/bower/angular-route/angular-route.js",
                "vendor/bower/angular-animate/angular-animate.js",
                "vendor/bower/angular-bootstrap/ui-bootstrap.js",
                "vendor/bower/angular-cookies/angular-cookies.js",
                "vendor/bower/angular-resource/angular-resource.js",
                "vendor/bower/angular-sanitize/angular-sanitize.js",
                "vendor/bower/angular-touch/angular-touch.js",
                "vendor/bower/angular-ui-router/release/angular-ui-router.js",
                "vendor/bower/bootstrap/dist/js/bootstrap.js",
                "vendor/bower/underscore/underscore.js"
            ],
            app: [
                "app/js/app.js",
                "app/js/**/*.js"
            ]
        },
        webfonts: {
            vendor: [
                "vendor/webfonts/*.*"
            ],
            root: "fonts"
        },
        less: {
            compile: {
                options: {
                    paths: ["vendor/css/**/*.css", "app/css/**/*.less"]
                }
            },
            vendor: ["vendor/css/**/*.less"]
        },
        css: {
            vendor: ["vendor/css/**/*.css","vendor/bower/bootstrap/dist/css/bootstrap.css","vendor/bower/bootstrap/dist/css/bootstrap-theme.css","vendor/bower/font-awesome/css/font-awesome.css"]
        }
    };
};
