/**
 * NotificationComponent.jsx - Real-time Notification System
 * 
 * This component implements a real-time notification system using Socket.IO.
 * It provides:
 * - Real-time notification delivery
 * - Notification display and management
 * - Socket connection handling
 * 
 * Features:
 * - WebSocket connection to server
 * - Event-based notification system
 * - Automatic cleanup on unmount
 * - Notification sending capability
 * 
 * Usage:
 * - Connects to notification server
 * - Listens for incoming notifications
 * - Displays notifications to users
 * - Allows sending notifications
 * 
 * Dependencies:
 * - Socket.IO client
 * - React useEffect for lifecycle management
 */

import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server URL

const App = () => {
  useEffect(() => {
    // Event listener for receiving notifications
    socket.on('notification', (data) => {
      console.log('Notification received:', data);
      // Handle the notification in your React component
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  // Function to send a notification
  const sendNotification = () => {
    const notificationData = { message: 'Hello from the client!' };
    socket.emit('notification', notificationData);
  };

  return (
    <div>
      <h1>Socket.IO Notifications Example</h1>
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
};

export default App;
