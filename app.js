console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const http = require("http");
http.createServer(function (request,response){
    let {url} = request;
    let chunks = [];
    request.on("data", function(chunk){
        chunks.push(chunk);
        request.on("end", function() {
            const body = Buffer.concat(chunks).toString();
            const wildcard = {
                brand: "Skittles",
                flavor: "Wild Berry",
              };
        
              const self = {
                name: "Bertrand",
                favColor: "blue",
              };
            
            
            if (url === "/") {
                response.write(JSON.stringify(wildcard));
            } else if (url === "/about") {
                response.write(JSON.stringify(self));
            } else if (url === "/echo") {
                response.write(body);
            } 
         });
    })
    
})
.listen(3000, function () {
    console.log("Server listening on port 3000...");
  });

// Finish setting up the server
