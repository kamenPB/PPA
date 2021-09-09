const http = require('http');
var axios = require("axios").default;

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var options = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
  params: {region: 'US', symbols: 'TTCF'},
  headers: {
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    'x-rapidapi-key': 'bf82456de9msh063e66a6701afeep1ca3fbjsnd359d0649e59'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data.quoteResponse.result[0].regularMarketPrice);
}).catch(function (error) {
  console.error(error);
});
