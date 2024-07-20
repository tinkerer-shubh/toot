const {TwitterApi} = require('twitter-api-v2');
require('dotenv').config();

const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });


  async function tweet(message) {
    try {
        const { data: createdTweet } = await client.v2.tweet(message);
        console.log('Tweet sent seccessfully:', createdTweet.text);
    } catch (error) {
        console.error('Error sending tweet:', error);
    }
  }

  module.exports = { tweet};