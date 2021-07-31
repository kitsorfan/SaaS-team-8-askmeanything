// Coded by Stylianos Kandylakis 
// Basic class for authentication purposes

const axios = require('axios')


// Reminder: JWT is stateless, so we need to user local storage
class Auth {
  signin({ email, accessToken }) {
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('accessToken', JSON.stringify(accessToken))
  }

  signout() { 
    localStorage.removeItem('email')
    localStorage.removeItem('accessToken')
  }

  signoutAllTabs(e) {
    if (e.key === 'token' && e.oldValue && !e.newValue) {
      window.location.reload()
    }
  }

  getEmail() {
    return JSON.parse(localStorage.getItem('email'))
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem('accessToken'))
  }

  async isSigned() {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'))

    if (!accessToken) return false // there is no accessToken

    const config = { headers: { 'x-access-token': `${accessToken}`} } // take accessToken from JSON response
    try {
      const response = await axios.get('http://localhost:8080/api/test/user', config) // try verify accessToken 
      return response.status === 200 
    } catch (error) {
      console.log("Dang it! Something went wrong: "+error)
      localStorage.removeItem('email')
      localStorage.removeItem('accessToken')
      return false
    }
  }
}

export default new Auth()
