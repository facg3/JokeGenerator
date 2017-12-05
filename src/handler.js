const request = require('request');

const getRandomJoke = (callback, user) => {
  return request('https://icanhazdadjoke.com/slack', (error, response) => {
    if (error) {
      console.log('Error:', error);
    } else {
      const jokeJSON = JSON.parse(response.body);
      const joke = jokeJSON.attachments[0].text;
      console.log(joke);
    }
  });
};

getRandomJoke();
