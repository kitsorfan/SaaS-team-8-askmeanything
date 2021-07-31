import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { Formik } from 'formik'
import { signinConstraints } from './Constraints'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import '../css/auth.css'


const axios = require('axios')

function Signin() {
  const [showMsg, setShowMsg] = useState(false)

  const { isSigned, signin } = useAuth()
  const history = useHistory()
  const location = useLocation()
  const alert  = location.state?.alert

  // signed in user should be redirected to main
  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await isSigned()
      if (isAuthenticated) {
        history.goBack()
      } 
    }
    if (!alert)  {checkAuth()} 
  }, [alert, history, isSigned])

  const handleSubmit = values => {
    const params = new URLSearchParams(); // parameters at application/x-www-form-urlencoded
    params.append('email', values.email);
    params.append('password', values.password);
    axios.post('http://localhost:8080/api/auth/signin', params)
        .then(response => {
          const { email, accessToken } = response.data
          signin({ email, accessToken })
          history.push('/')
        })
        .catch(error => {
          const status = error.response?.status
          if (status === 400 || status === 401 || status === 404) { // user doesn't exists
            setShowMsg(true)
          } else {
            console.log('Dang it! Something went really wrong!: ' + error )
          }
        })
  }

  return (
   <div className='authBigBox'>
            <div className='authInnerBox' >
              <div className='authTitle'>
                <div className='Team8'>
                  <a className='AMAtitle' href='/'> Team 8 🔹 Ask Me Anything </a>
                </div>
                <div className='mainBox'> 
                  {alert &&
                  <Alert className='warningBox' variant='warning'>
                   <div>
                      <div className='warningText'>Hey fellow!🤠 You must sign in or if you don't have an account <Link to={{ pathname: '/signup', state: location.state }}><span className="linkJoin">Sign up</span></Link></div>
                    </div>
                  </Alert>}
                  <Formik
                      initialValues={{
                        email: '',
                        password: ''
                      }}
                      validationSchema={signinConstraints}
                      onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values)
                        setSubmitting(false)
                      }}
                  >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        errors
                      }) => (
                      
                        <Form noValidate onSubmit={handleSubmit}>
                          <Form.Group controlId='formGroupUsername'>
                            <Form.Label className='credentials'>📧Email:</Form.Label>
                            <Form.Control
                                className = "formBox"
                                type='email'
                                name='email'
                                autoComplete='email'
                                value={values.email}
                                onChange={e => {
                                  if (showMsg) {
                                    setShowMsg(false)
                                  }
                                  handleChange(e)
                                }}
                                onBlur={handleBlur}
                                isInvalid={(touched.email && errors.email) || showMsg}
                            />
                            <Form.Control.Feedback type='invalid' className="constraintWarning">
                              {showMsg ? 'Whooops!🥴 Is your email or password correct?' : errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group controlId='formGroupPassword'>
                            <Form.Label className='credentials'>🔑Password</Form.Label>
                            <Form.Control
                                className = "formBox"
                                type='password'
                                name='password'
                                autoComplete='new-password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.password && errors.password}
                            />
                            <Form.Control.Feedback type='invalid' className="constraintWarning">
                              {errors.password}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Button className='submitButton' variant='primary' type='submit'>Sign in! 😊</Button>
                        </Form>
                    )}
                  </Formik>
                </div>
              </div>

              <div className='notHere'>
                Not a member? 🤔&nbsp; <Link  to={{ pathname: '/signup', state: location.state }}><div className="linkJoin">JOIN </div></Link>&nbsp;our team now!
              </div>
            </div>
          </div>
  )
}

export default Signin
