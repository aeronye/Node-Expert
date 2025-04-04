// const http = require("https");

// const req = http.request('https://www.google.com', (res)=>{
//     res.on('data', (chunk)=>{
//         console.log(`Data chunks: ${chunk}`);
//     });
//     res.on('end', ()=>{
//         console.log('No more data');
//     });
// });

// req.end();

// ------------------------------------------------

// const { request } = require("https");

// const req = request('https://www.google.com', (res)=>{
//     res.on('data', (chunk)=>{
//         console.log(`Data chunks: ${chunk}`);
//     });
//     res.on('end', ()=>{
//         console.log('No more data');
//     });
// });

// req.end();

// ------------------------------------

const { get } = require("https");

get('https://www.google.com', (res)=>{
    res.on('data', (chunk)=>{
        console.log(`Data chunks: ${chunk}`);
    });
    res.on('end', ()=>{
        console.log('No more data');
    });
});

