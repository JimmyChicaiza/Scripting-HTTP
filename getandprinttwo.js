var https = require("https");

function getAndPrintHTML(options) {
  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

  var dataAppend = "";
  https.get(requestOptions, function(response) {
    response.setEncoding("utf8");

    response.on("data", function(data) {
     dataAppend += data; 
    //   console.log("Chunk Received. Length:", data.length);
    //   console.log(data + "\n");
    });

    response.on("end", function() {
      console.log("Response stream complete.");
      console.log(dataAppend)
    });
  });
}

getAndPrintHTML();
