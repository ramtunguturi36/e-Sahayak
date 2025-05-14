/**
 * firebase.jsx - Firebase Configuration
 * 
 * This file initializes and configures Firebase services for the application.
 * It provides:
 * - Firebase app initialization
 * - Firebase configuration setup
 * - Firebase service exports
 * 
 * Firebase Services:
 * - Authentication
 * - Firestore Database
 * - Storage
 * - Analytics
 * 
 * Configuration Details:
 * - Project: eportaldb-9aadb
 * - Authentication Domain: eportaldb-9aadb.firebaseapp.com
 * - Storage Bucket: eportaldb-9aadb.appspot.com
 * - Analytics Enabled
 * 
 * Usage:
 * - Import firebaseApp in components that need Firebase services
 * - Use Firebase services for authentication, database, and storage
 * 
 * Dependencies:
 * - firebase/app
 * 
 * Note: Keep Firebase configuration secure and never expose sensitive keys
 */

// firebase.js

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "7333745829",
  appId: "1:7333745829:web:13a58ff96c551e28c9294c",
  measurementId: "G-RC22CRFYGF"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
