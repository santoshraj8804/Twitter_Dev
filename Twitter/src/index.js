const express = require('express');
const connect = require('./config/database');
const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async () => {
    console.log('Server started');
    await connect();
    console.log('Mongo DB connected');
    const tweets = await Tweet.find({
        content: ['First tweet', 'now its updated', '12344']
    });
    console.log(tweets);
});