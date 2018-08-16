---
title: Overview
---

## How to run and build the pattern library

The pattern library is based on [Fractal](http://fractal.build).

Best way to understand how to run it and what is required is to read the [documentation](http://fractal.build/guide). Start from [how to install Fractal](http://fractal.build/guide/installation); Node, npm, Gulp and Fractal itself are the things needed:

1. [Install Node and npm](https://docs.npmjs.com/getting-started/installing-node#install-npm--manage-npm-versions).
2. Install gulp-cli: `npm install gulp-cli -g`
3. Install Fractal-cli: `npm i -g @frctl/fractal`

Once everything is installed run:
```
gulp dev
```
And the pattern library should be visible at http://localhost:3000


For creating a build, that is just a static version of the library run:
```
gulp build
```
For everything else best to read the [documentation](http://fractal.build/guide) extensively and check [Fractal's GitHub](https://github.com/frctl/fractal).

The master branch of the library is automatically deployed at every commit to [Netlify](https://lbh-pattern-library.netlify.com).

[Codeship](https://snyk.io/), [Snyk](https://snyk.io/) and [Greenkeeper](https://greenkeeper.io/) are also in use for checking errors while building and vulnerability and mantainability of dependencies.

## To do
