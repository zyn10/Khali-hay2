const http= require('http');

const port = process.env.PORT || 3000;//jo bhi port mil rha ha kam krnay k lea pkr lo
const server = http.createServer((req,res)=>{
	console.log(req.url);
	res.statusCode=200//200 mtlb good Okay
	res.setHeader('Content-type','text/html');//kistrha ka content server na bheja ha
	res.end('<h1> this is Zain </h1><p>This is the way to rock the world</p> ');
	//ap jo response bhj rhay hain
})
//agr yahien sa run krain gay to nai ho ga
//we need to listen 

server.listen(port,()=>{
console.log('server is listening on port ${port}');
});
//to check write 
//localhost:3000 ya jo b likha ha google pa likhna ha 