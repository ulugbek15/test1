const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {

	if(req.url === '/'){
		fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) =>{
			if(err){
				throw err
			}
			res.writeHead(200, {
				"Content-Type": "text/html"
			})
			res.end(data)
		})
	}else{
		console.log("ok")
	}
	if(req.url === '/about'){
		fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) =>{
			if(err){
				throw err
			}
			res.writeHead(200, {
				"Content-Type": "text/html"
			})
			res.end(data)
		})
	}else{
		console.log("ok")
	}

})
server.listen(3000, () =>{
	console.log('server is listening on port 3000')
})