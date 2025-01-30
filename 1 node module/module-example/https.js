// let's write our own module, and organise our own code
// const request = require("./request");
// const response = require("./response");
// // run on node repl require.extensions

// function makeRequest(url, data){
//     request.send(url, data);
//     return response.read();
// } 

const { send } = require("./request");
const { read } = require("./response");

function makeRequest(url, data){
    send(url, data);
    return read();
} 

const responseData = makeRequest("https://www.google.com", "hello");
console.log(responseData);

console.log(require.cache);