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
fractal.set('project.title', 'LBH Pattern Library');
fractal.set('project.version', 'v0.1.5');
fractal.set('project.author', 'Riccardo Erra');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.engine('@frctl/nunjucks'); // use Nunjucks for components
fractal.components.set('ext', '.nunj'); // look for files with a .nunj file extension
fractal.components.set('path', path.join(__dirname, 'components'));

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
    skin: "olive"
    // Any other theme configuration values here
});

fractal.web.theme(myCustomisedTheme); // Tell Fractal to use the configured theme by default
