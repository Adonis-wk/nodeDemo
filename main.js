const http = require('http');
const { aesDecrypt,aesEncrypt } = require('./aesModule');
console.log("============",aesEncrypt('王凯==ok','347c6161e79f4b6a'))
this.password = aesDecrypt('94d33b13b157ef4f93c71ee35ce36ab9', '347c6161e79f4b6a')
console.log(this.password)
const hostname = '0.0.0.0';
const port = 8088;
const server = http.createServer((req, res) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.end(`${this.password}\n`);
}); 

server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`);
});