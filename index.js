// index.js

const io = require('socket.io-client');
const socket = io('http://localhost:3000/');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('new-data', (data) => {
  console.log('Received new data:', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
