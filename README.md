# lbh-pattern-library

[![Netlify Status](https://api.netlify.com/api/v1/badges/30b38bb5-cc87-4643-837f-9d9733b5d8f8/deploy-status)](https://app.netlify.com/sites/lbh-pattern-library/deploys)
 [ ![Codeship Status for LBHackney-IT/lbh-pattern-library](https://app.codeship.com/projects/4a881f30-814c-0136-409f-6ef3b406e826/status?branch=master)](https://app.codeship.com/projects/301692)
 [![Greenkeeper badge](https://badges.greenkeeper.io/LBHackney-IT/lbh-pattern-library.svg?token=aeaf15d91330ee168acb79319c49ccd0e967af460a908c5c57940d566fa14ead&ts=1534255836760)](https://greenkeeper.io/)

The pattern library is based on [Fractal](http://fractal.build).

Best way to understand how to run it and what is required is to read the [documentation](http://fractal.build/guide). Start from [how to install Fractal](http://fractal.build/guide/installation); Node, npm, Gulp and Fractal itself are the things needed:

1. [Install Node and npm](https://docs.npmjs.com/getting-started/installing-node#install-npm--manage-npm-versions).
2. Install gulp-cli: `npm install gulp-cli -g`
3. Install Fractal-cli: `npm i -g @frctl/fractal`

Once everything is installed run:
```
npm install
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
