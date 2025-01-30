const path = require('path');
// /folder/file.jpg  \folder\file.jpg

function getMessages(req, res){
    res.render('messages', {
        title: 'Message to my friends!',
        friend: 'Elon Musk',
    })
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
    // res.send('<ul><li>Hello Einstein</li></ul>');
}

function postMessage(req, res){
    console.log('updating messages....');
}

module.exports = {
    getMessages,
    postMessage,
}