function getMessages(req, res){
    res.send('<ul><li>Hello Einstein</li></ul>');
}

function postMessage(req, res){
    console.log('updating messages....');
}

module.exports = {
    getMessages,
    postMessage,
}