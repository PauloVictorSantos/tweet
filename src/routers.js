const express = require('express');

const routers = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routers.get('/tweet', TweetController.index);
routers.post('/tweet', TweetController.index);

routers.post('/likes:id', LikeController.store);

module.exports = routers;