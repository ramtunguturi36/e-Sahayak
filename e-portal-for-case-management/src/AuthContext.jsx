/**
 * AuthContext.jsx - Authentication Context Provider
 * 
 * This file implements a React Context for managing authentication state across the application.
 * It provides:
 * - Global authentication state management
 * - Login/logout functionality
 * - Authentication state access throughout the app
 * 
 * Components:
 * - AuthContext: The React Context object for authentication
 * - useAuth: Custom hook to access authentication state and methods
 * - AuthProvider: Provider component that wraps the application
 * 
 * Usage:
 * - Wrap your app with AuthProvider
 * - Use useAuth hook in any component to access auth state
 */

import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}