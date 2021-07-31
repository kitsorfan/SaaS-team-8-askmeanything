import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { Formik } from 'formik'
import { signupConstraints } from './Constraints'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// import './Sign.css'
import '../css/auth.css'


const axios = require('axios')

function Signup() {
  const [showMsg, setShowMsg] = useState(false)

  const { isSigned } = useAuth()
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
    axios.post('http://localhost:8080/api/auth/signup/', params)
    .then(response => {
          history.push('/')
        })
        .catch(error => {
          const status = error.response?.status
          const message = error.response?.data?.message
          if (status === 400 && message === 'Failed! Email is already in use!') { 
            setShowMsg(true)
          } else {
            console.log(error)
          }
        })
  }

  return (
      <div className='authBigBox'>
            <div className='authInnerBox'>
              <div className='authTitle'>
                <div className='Team8'>
                  <a className='AMAtitle' href='/'>Team 8 🔹 Ask Me Anything </a>
                </div>
                <div className='mainBox'>
                  {alert &&
                  <Alert className='warningBox' variant='warning'>
                    <div>
                      <div className='warningText'>Sorry lad!🤠 You must have an account. Sign up or <Link to={{ pathname: '/signin', state: location.state }}><span className="linkJoin">Sign in</span></Link></div>
                    </div>
                  </Alert>}
                  <Formik
                      initialValues={{
                        email: '',
                        password: '',
                        second_password: ''
                      }}
                      validationSchema={signupConstraints}
                      onSubmit={({ email, password }, { setSubmitting }) => {
                        handleSubmit({ email, password })
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
                            <Form.Label className='credentials'>Email📧</Form.Label>
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
                              {showMsg ? 'Ooopsies!😋 Someone has already sign up with this mail. Was it you?' : errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group controlId='formGroupPassword'>
                            <Form.Label className='credentials'>Password🔑</Form.Label>
                            <Form.Control
                                className="formBox"
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

                          <Form.Group controlId='formGroupRePassword'>
                            <Form.Label className='credentials'>Re-enter password🔑</Form.Label>
                            <Form.Control
                                className="formBox"
                                type='password'
                                name='second_password'
                                autoComplete='new-password'
                                value={values.second_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.second_password && errors.second_password}
                            />
                            <Form.Control.Feedback type='invalid' className="constraintWarning">
                              {errors.second_password}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Button className='submitButton' variant='primary' type='submit'>Sign up 🤗</Button>
                        </Form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className='notHere'>
                Already in our team?😎 Just &nbsp; <Link to={{ pathname: '/signin', state: location.state }}><div className="linkJoin">Sign in</div></Link>!
              </div>
            </div>
          </div>
  )
}

export default Signup
