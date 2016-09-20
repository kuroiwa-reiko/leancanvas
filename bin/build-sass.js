/**
 * buildSass.js
 */

const sass = require('node-sass');
const bourbon = require('node-bourbon');

sass.render({
    file:'../src/sass/base.scss',
    success: (css) => {
        console.log(css);
    },
    error: (error) => {
        console.error(error);
    },
    includePaths: bourbon.includePaths,
    outputStyle: 'compressed'
});