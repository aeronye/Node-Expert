const express = require('express');

const messagesController = require('../controllers/messages.controller');

const messageRouter = express.Router();

// Route Handlers
messageRouter.get('/', messagesController.getMessages);
messageRouter.post('/', messagesController.postMessage);

module.exports = messageRouter;


