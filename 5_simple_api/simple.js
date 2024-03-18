const http = require("http");

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify({name: "Suraj Singh Rawat",email:'surajsinghrawat1999@gmail.com',dob:'10july1999'}));
    resp.end();

}).listen(4102);