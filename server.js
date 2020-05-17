const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('public/api/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;


server.use(middlewares);
server.use(router);
app.use(express.static(__dirname + '/public'))

server.listen(port);