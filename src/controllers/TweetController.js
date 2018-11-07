const Tweet = require('../models/Tweet');

module.exports = {
    async index(req, res) {
        const tweet = await Tweet.find({}).sort('-createdAt');
        return res.json(tweet);
    },

    async store(req, res) {
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);
        //enviando um evento para todos os clientes

        return res.json(tweet);
    }
};