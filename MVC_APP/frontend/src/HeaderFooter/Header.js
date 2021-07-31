import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../Auth/AuthContext'
import Button from 'react-bootstrap/Button'

import '../css/Header.css'

function Header() {
  const history = useHistory()
  const { email, signout } = useAuth()


  

  // logout
  const handleClick = () => {
    signout()
    history.push('/')
    window.location.reload()
  }
   
  return (
    <div className='header' >
        <a href='/'><span className='AMAtitle'>Team 8 - Ask Me Anything</span></a>
          {email ?
           
            <Button className='signButton s1' onClick={handleClick}>Sign Out</Button>        
              :
                <span className='twoButtons'>
                  <Button className='signButton s2' href='/signup'>Sign Up</Button>
                  <Button className='signButton s1' href='/signin'>Sign In</Button>
                </span>
          }

      </div>
  )
}

export default Header
