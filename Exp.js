// // request module is used in node.js to make http calls to the server.

// const fs=require('node:fs');
// try {
//     const content='this is written synchronoisly.';
//     fs.writeFileSync('output.txt',content,'utf8');
//     console.log('File written successfully');
// }catch(err){
//     console.error(err);
// }



// const http=require('http');
// http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.write('Hello, World!\n');
    
//     response.end();
// }).listen(1338);

