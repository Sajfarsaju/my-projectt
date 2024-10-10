// require()
// http
// const http = require("http")

// const server = http.createServer((request, response) => {

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'text/plain'); 
//   response.end('Hello, World!'); 
// });

// server.listen(3000, '127.0.0.1', () => {

//   console.log('Server running at http://127.0.0.1:3000/');

// });

const fs = require("fs")

fs.writeFile('example.txt', 'This is an example text!', (err) => {
    if (err) {
        console.log(err)
    }else{
        console.log('File created and text written!');
    }


    fs.readFile('sample.txt', 'utf8', (err, data) => {
      if (err){
        console.log(err)
      }else{
          console.log('File content:', data);
      }
    });
  });