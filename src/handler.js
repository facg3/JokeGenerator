const request = require('request');

const option = {
  url: '',
  headers: {
    'User-Agent': 'request',
  },
};
const homepage = (req, res) => {
request(option, (err, result, body) => {

    if (err) { return console.log(err); }
    if (result.statusCode === 200) {
      res.end(body);
    }
  });
};

const getRandomJoke = (callback, user) => {
  return request('https://icanhazdadjoke.com/slack', (error, response) => {
    if (error) {
      console.log('Error:', error)
    } else {
      let jokeJSON = JSON.parse(response.body)
      let joke = jokeJSON.attachments[0].text
      console.log(joke);

    }
  })
}

getRandomJoke()
module.exports = homepage;
