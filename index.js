const Twit = require('twit');
const request = require('request');

//set up tokens to be able to initialize the Twit library and make requests to the API
const T = new Twit({
    consumer_key: 'N56Ag9iol75kRBJFoeSufpWHX',
    consumer_secret: 'NMy8gTIs6PSfOwiNmyMFIe9iySUAjIK6fgbZ0OAsZHNlxFshdJ',
    access_token: '1010636880013119488-AZ7DuVfH57yrQ3p1Z2o5DOjCcaeV0c',
    access_token_secret: 'aK1oB7JVAJ31v3Td6UZkFZmswI8xr3TNJsyvYsqS0v1qk'
});

//API source URL
const url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=123456&format=text&lang=en";

//I need to:
//call a function to make the request
function getQuote (callback) {
    request(url, function(error, response, body) {
        console.log('error:', error); //Prints error if an error occurs
        console.log('statusCode:', response && response.statusCode); //prints the response
        console.log('body:', body);
        callback(body);
    });
}

//send data to another function to tweet
function postTweet(tweet) {
    console.log(tweet);
    T.post('statuses/update', { status: tweet }, function(err, data, response) {
        console.log(data);
    })
}

//tweet the data
getQuote(postTweet);
