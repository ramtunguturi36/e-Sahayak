/**
 * theme.jsx - Material-UI Theme Configuration
 * 
 * This file defines the global theme configuration for the application using Material-UI.
 * It provides:
 * - Consistent color scheme across the application
 * - Custom color palette definition
 * - Theme customization for Material-UI components
 * 
 * Color Palette:
 * - Primary: #2196F3 (Blue) - Main brand color
 * - Secondary: #FF4081 (Pink) - Accent color
 * - Error: #f44a57 (Red) - Error states and warnings
 * - Table: #f44a57 (Red) - Table-specific styling
 * 
 * Usage:
 * - Applied globally to all Material-UI components
 * - Ensures consistent styling across the application
 * - Can be extended with additional theme properties
 * 
 * Dependencies:
 * - @mui/material/styles
 */

import {  createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // Change this to your desired primary color
    },
    secondary: {
      main: '#FF4081', // Change this to your desired secondary color
    },
    error: {
        main: '#f44a57', // Change this to your desired secondary color
    },
    table: {
        main: '#f44a57', // Change this to your desired primary color
      },
    // Add more custom colors as needed
  },
});

export default theme;