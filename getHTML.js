var https = require("https");

var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step4.html"
};

function getHTML(options, callback) {
var dataAppend = "";

https.get(requestOptions, function(response) {
    response.setEncoding("utf8");

    response.on("data", function(data) {
    dataAppend += data;
    });

    response.on("end", function() {
    callback(dataAppend);
    });
});
}

function printHTML (html) {
    console.log(html);
}

getHTML(requestOptions, printHTML);