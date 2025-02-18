const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 8000;

const MONGO_URL = 'mongodb+srv://nasa-api:7fYMDvTT0nkwia90@cluster0.dd2mh.mongodb.net/nasa?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connection.once('open', () =>{
    console.log('Mongodb connection ready!');
});
mongoose.connection.on('error', (err) =>{
    console.error(err);
})

mongoose.connect(MONGO_URL);


// await mongoose.connect(MONGO_URL, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// })

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
});