var https = require("https");

function getAndPrintHTML() {

  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

 

  https.get(requestOptions, function(response) {
    response.setEncoding("utf8");

    response.on("data", function(data) {
    
      console.log("Chunk Received. Length:", data.length);s
      console.log(data + "\n");
    });

    response.on("end", function() {
      
  
    });
  });
}

getAndPrintHTML();
