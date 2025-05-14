/**
 * App.jsx - Main Application Component
 * 
 * This is the root component of the e-portal case management system.
 * It handles:
 * - Application routing and navigation
 * - Global state management
 * - Main layout structure
 * - Authentication state
 * - Real-time notifications using Socket.IO
 * 
 * The component integrates various features including:
 * - User authentication
 * - Real-time notifications
 * - Protected routes
 * - Global theme and styling
 */

// Update imports to reflect the new structure.

// import React, { useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000'); // Replace with your server URL

// const App = () => {
//   useEffect(() => {
//     // Event listener for receiving notifications
//     socket.on('notification', (data) => {
//       console.log('Notification received:', data);
//       // Handle the notification in your React component
//     });

//     // Clean up the socket connection on component unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   // Function to send a notification
//   const sendNotification = () => {
//     const notificationData = { message: 'Hello from the client!' };
//     socket.emit('notification', notificationData);
//   };

//   return (
//     <div>
//       <h1>Socket.IO Notifications Example</h1>
//       <button onClick={sendNotification}>Send Notification</button>
//     </div>
//   );
// };
//   return (
//     <div>
//       <h1>Socket.IO Notifications Example</h1>
//       <button onClick={sendNotification}>Send Notification</button>
     
//     </div>
//   );
// };

// export default App;
