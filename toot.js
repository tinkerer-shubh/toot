#!/usr/bin/env node

const {program} = require('commander');
const {tweet} = require('./tweetService');

program.version('1.0.0').description('A CLI to tweet from your terminal').option('-t, --tweet <message>', 'Tweet a message' ).parse(process.argv);

const options = program.opts();

if (option.tweet) {
    tweet(options.tweet);
} else {
    console.log('Please provide a tweet using the -t or --tweet option');
}