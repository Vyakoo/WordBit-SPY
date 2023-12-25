const WebSocket = require('ws');

const server = new WebSocket.Server({port: 5000, /*host: '192.168.151.213'*/});

server.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(message)
    server.clients.forEach(client => {
      if(client.readyState === WebSocket.OPEN) {
        client.send(message.toString('utf8'));
      }
    });
  });
});

server.on('error', e => console.log(e))