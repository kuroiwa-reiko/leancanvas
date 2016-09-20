/**
 * buildSass.js
 */

const fs = require('fs');
const sass = require('node-sass');
const bourbon = require('node-bourbon');

const file = __dirname + '/../src/sass/base.scss';
const outFile = __dirname + '/../src/stylesheets/base.min.css';

sass.render({
    file,
    outFile,
    includePaths: bourbon.includePaths,
    outputStyle: 'compressed'
}, function (err, result) {
    if (err) {
        console.error(err);
    }
    fs.writeFile(outFile, result.css, (err) => {
        if (err) {
            console.error(err);
        }
        console.log('File created: ' + outFile);
    });
});
