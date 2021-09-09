const http = require('http');
var axios = require("axios")

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

var region = "US" // example region
var ticker = "AAPL"; // example symbol

var options = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
  params: {region: region, symbols: ticker},
  headers: {
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    'x-rapidapi-key': '6e8d9f8582msheb8b219acbbb505p19b531jsn2c2ae3b594a4'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data.quoteResponse.result[0].regularMarketPrice);
}).catch(function (error) {
  console.error(error);
});
