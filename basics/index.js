// var http = require("http");

// //create a server object:
// http
//   .createServer(function (req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
console.log(process.argv);
const sum = (a, b) => a + b;
// const num1 = +process.argv[2];
// const num2 = +process.argv[3];
const[, , num1,num2]=process.argv
console.log(sum(+num1,+num2));
