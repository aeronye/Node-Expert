// const internals = require('./internals');

const { send, read } = require('./internals');

// const { send } = require("./internals/request");
// const { read } = require("./internals/response");

function makeRequest(url, data){
    // internals.request.send(url, data);
    // return internals.response.read();
    send(url, data);
    return read();
} 

const responseData = makeRequest("https://www.google.com", "hello");
console.log(responseData);

// console.log(require.cache);