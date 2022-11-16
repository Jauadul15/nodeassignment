var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){
if(req.url=="/"){
    //asyn
    fs.readFile('home.html',function (error,data) {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data);
        res.end();
    })

}
else if(req.url=="/content"){
    fs.readFile('content.html',function (error,data) {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data);
        res.end();

    })


}
else if(req.url=="/assignment"){
    fs.readFile('assignment.html',function (error,data) {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data);
        res.end();

    })
}

})
server.listen('5001');
console.log("hoise kaj");