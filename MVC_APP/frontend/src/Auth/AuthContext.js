// Coded by Stylianos Kandylakis 

import React, { useState, useContext } from 'react'
import auth from './Auth'

/**
 * Context to pass auth functions between components
 */

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [email, setEmail] = useState(auth.getEmail())
  const [accessToken, setAccessToken] = useState(auth.getAccessToken())

  const signin = ({email, accessToken}) => {
    auth.signin({email, accessToken})
    setEmail(email)
    setAccessToken(accessToken)
  }

  const signout = () => {
    auth.signout()
  }

  const isSigned = auth.isSigned

  return (
      <AuthContext.Provider value={
        {
          email,
          accessToken,
          isSigned,
          signin,
          signout
        }
      }>
        {children}
      </AuthContext.Provider>
  )
}
