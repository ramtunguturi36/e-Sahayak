/**
 * server.js - WebSocket Server Implementation
 * 
 * This file implements the WebSocket server for real-time communication in the application.
 * It provides:
 * - WebSocket server setup using Socket.IO
 * - Real-time event handling
 * - Client connection management
 * 
 * Features:
 * - Express server integration
 * - Socket.IO server setup
 * - Connection event handling
 * - Notification broadcasting
 * - Client disconnection handling
 * 
 * Event Handlers:
 * - 'connection': Handles new client connections
 * - 'notification': Processes and broadcasts notifications
 * - 'disconnect': Handles client disconnections
 * 
 * Configuration:
 * - Port: 3001 (default) or from environment variable
 * - CORS enabled for cross-origin requests
 * 
 * Dependencies:
 * - express
 * - socket.io
 * - http (Node.js built-in)
 */

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle events (e.g., notifications)
  socket.on('notification', (data) => {
    console.log('Notification received:', data);
    // Broadcast the notification to all connected clients
    io.emit('notification', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
