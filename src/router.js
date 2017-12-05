const handlers = require('./handler.js');

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    handlers(request, response);
  }
  else {
    response.writeHead(404);
    response.end('PAGE NOT FOUND!!!!!!!!!!');
  }
}
module.exports = router;
