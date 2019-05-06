var https = require("https");

function getAndPrintHTML (options) {

    options = { 
    host: "sytantris.github.io",
    path: "/http-examples/step3.html"
    }
 
    var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step3.html"
  };

  var dataAppend = "";
  https.get(requestOptions, function(response) {
    response.setEncoding("utf8");

    response.on("data", function(data) {
     dataAppend += data; 
   
    });

    response.on("end", function() {
      console.log("Response stream complete.");
      console.log(dataAppend)
    });
  });
}

getAndPrintHTML();
