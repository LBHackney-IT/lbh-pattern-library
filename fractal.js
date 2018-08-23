'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Pattern Library');
fractal.set('project.version', 'v0.1.5');
fractal.set('project.author', 'Riccardo Erra');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.engine('@frctl/nunjucks'); // use Nunjucks for components
fractal.components.set('ext', '.njk'); // look for files with a .nunj file extension
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('default.preview', '@preview');
fractal.components.set('default.collated', 'true');
fractal.components.set('default.collator', function(markup, item) {
    return `<!-- @${item.handle} -->\n${markup}`
});
fractal.components.set('resources', {
    css: {
        label: 'CSS',
        match: ['**/*.css']
    }
});
fractal.components.set('statuses', {
  wip: {
        label: "WIP",
        description: "Work in progress. Do not implement.",
        color: "#FF3333"
    },
    review: {
        label: "In review",
        description: "In review. Implement with caution.",
        color: "#FF9233"
    },
    ready: {
        label: "Ready",
        description: "Ready to implement.",
        color: "#29CC29"
    }
});
fractal.components.set('default.status', 'wip');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Tell the Fractal web preview plugin where to look for static HTML exports.
 */
fractal.web.set('builder.dest', path.join(__dirname, 'build'));

/*
 * Web UI -> Default theme
 */
const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// Create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: "olive",
    format: "json",
    nav: ["docs", "components"],
    panels: ["html", "view", "context", "resources", "info", "notes"],
    styles: ["default", "/assets/css/theme.css"]
    // any other theme configuration values here
});

// specify a directory to hold the theme override templates
myCustomisedTheme.addLoadPath(__dirname + '/theme');

/*
 * Specify the static assets directory that contains the custom stylesheet.
 */
myCustomisedTheme.addStatic(__dirname + '/assets', '/theme');

fractal.web.theme(myCustomisedTheme); // Tell Fractal to use the configured theme by default
