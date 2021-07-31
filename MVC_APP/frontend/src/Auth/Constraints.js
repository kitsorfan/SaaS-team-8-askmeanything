// Coded by Stelios Kandylakis
// Here we have the constraints for every sign in and signup option

import * as Yup from 'yup'


// Signin Constraints
export const signinConstraints = Yup.object({
  email: Yup.string()
      .email('Hey!🤔 This is not an email!')
      .required('Give me an email! Pleeease!🥺'),
  password: Yup.string()
      .required('😕How about giving me a password!')
})




// Signup Constraints
export const signupConstraints = Yup.object({
  email: Yup.string()
      .email('Hey!🤔 This is not an email!')
      .required('Give me an email! Pleeeese!🥺'),
  password: Yup.string()
      .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // see here for more: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
          'Wanna get hacked?🤨 You should use a least 8 characters, including 1 letter and 1 number.'
      )
      .required('How about giving me a password.🤠 I cannot let anyone use your email.'),
  second_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Check your second password to match the first.🧐')
      .required('Hey there! Will you tell me your password again? Just to be sure.😏')
})

