import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AuthProvider } from './Auth/AuthContext'
import auth from './Auth/Auth'
import ProtectedRoute from './Auth/ProtectedRoute'
import Signup from './Auth/Signup'
import Signin from './Auth/Signin'


import Public from './Public/Public'

function App() {
  useEffect(() => {
    window.addEventListener('storage', auth.signoutAllTabs)
    return function cleanup() {
      window.removeEventListener('storage', auth.signoutAllTabs)
    }
  }, [])

  return (
      <Router>
   
          <AuthProvider>
            <Switch>
              <Route path='/signup' component={Signup} />
              <Route path='/signin' component={Signin} />
              <ProtectedRoute
                  exact
                  path='/allQuestions'
                  redirect='/signin'
                  state={{ alert: true }}  
                  component={Public}
              />
              <ProtectedRoute
                  path='/newQuestion'
                  redirect='/signin'         // redirect user to signin page if unauthorized
                  state={{ alert: true }}   // alert user to sign in in or sign up
                  component={Public}
              />
              <ProtectedRoute
                  path='/newAnswer'
                  redirect='/signin'         // redirect user to signin page if unauthorized
                  state={{ alert: true }}   // alert user to sign in in or sign up
                  component={Public}
              />
              <ProtectedRoute
                  path='/answersOfQuestion'
                  redirect='/signin'         // redirect user to signin page if unauthorized
                  state={{ alert: true }}   // alert user to sign in in or sign up
                  component={Public}
              />
               <ProtectedRoute
                  path='/myQuestions'
                  redirect='/signin'         // redirect user to signin page if unauthorized
                  state={{ alert: true }}   // alert user to sign in in or sign up
                  component={Public}
              />
              <Route path='/' component={Public} />
            </Switch>
          </AuthProvider>
      </Router>
  )
}

export default App
