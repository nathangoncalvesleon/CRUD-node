

const http = require("http");


http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });

    if(request.url === "/") {
        response.end(JSON.stringify({
            message: "Hello World"}))
    }

    if(request.url === "/cadastro") {
        response.end(JSON.stringify({
            message: "Cadastro"}))
    }

  
   

})
.listen(4001, () => console.log("Server running on port 4001"));