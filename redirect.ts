const http = require('http');

const redirectUrl = 'https://vireffy.net';

http.createServer((req, res) => {
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}).listen(process.env.PORT || 3000, () => {
  console.log(`Redirecting all traffic to ${redirectUrl}`);
});
