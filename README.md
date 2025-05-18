# e-Portal Case Management System

A comprehensive full-stack web application for managing court cases, hearings, and legal documentation.

## Tech Stack

- Frontend: React (Vite), Material-UI, Framer Motion
- Backend: Node.js, Express.js
- Database: MongoDB (with Mongoose)
- Real-time Communication: Socket.IO, Zego Cloud (Video), SendBird (Chat)
- Document Storage: Firebase

## Features

- Multi-role access (Admin, Advocate, Client, Judge)
- Case filing and management
- Virtual hearings with video conferencing
- Real-time chat system
- Document management and storage
- Case tracking and notifications
- Payment processing
- Comprehensive dashboards

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
e-portal-for-case-management/
├── src/
│   ├── components/
│   ├── pages/
│   ├── features/
│   ├── services/
│   └── utils/
├── backend/
├── public/
└── tests/
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_APP_API_URL=http://localhost:5000
VITE_APP_FIREBASE_CONFIG={your_firebase_config}
VITE_APP_ZEGOCLOUD_APPID={your_zegocloud_appid}
VITE_APP_SENDBIRD_APPID={your_sendbird_appid}
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact

For support or questions, please contact [support@e-portal.com]
