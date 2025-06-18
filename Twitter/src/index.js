const express = require('express');
const connect = require('./config/database');
const app = express();

// const Tweet = require('./models/tweet');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log('Server started');
    await connect();
    console.log('Mongo DB connected');
    // const tweet = await Tweet.create({
    //     content: 'Third tweet'
    // })
    //const tweets = await Tweet.find({userEmail: 'a@b.com'});
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComments('6852c8e8037e79d9c7f0c48b');
    console.log(tweet);
});