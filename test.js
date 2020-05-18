const http = require('http')

// module.exports = {
//     sum:(a,b)=>{
//         return a+b;
//     },
//     min:(a,b)=>{
//         return a-b;
//     },
//     mul:(a,b)=>{
//         return a*b;
//     },
//     div:(a,b)=>{
//         return a/b;
//     }
// }

http.createServer((req, res)=>{
    res.write('<h1>Hello World</h1>');
    res.end()
}).listen(3001);