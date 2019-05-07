var https = require('../http-functions');

function printHTML (html) {
    console.log(html.toLowerCase());
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/print_lowercase.html'
};


getHTML(requestOptions, printHTML);