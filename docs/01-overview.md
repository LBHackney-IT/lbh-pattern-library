## How to run and build the pattern library

The pattern library is based on [Fractal](http://fractal.build).

Best way to understand how to run it and what is required is to read the [documentation](http://fractal.build/guide). Start from [how to install Fractal](http://fractal.build/guide/installation); Node, Gulp and Fractal itself are the only things needed.

Once everything is installed just run
```
gulp dev
```
And the pattern library should be visible at http://localhost:3000


For creating a build, that is just a static version of the library run
```
fractal build
```
For everything else best to read the [documentation](http://fractal.build/guide) extensively and check [Fractal's GitHub](https://github.com/frctl/fractal).

The master branch of the library is automatically deployed at every commit to [Netlify](https://lbh-pattern-library.netlify.com).

[Codeship](https://snyk.io/), [Snyk](https://snyk.io/) and [Greenkeeper](https://greenkeeper.io/) are also in use for checking errors while building and vulnerability and mantainability of dependencies.

## To do
