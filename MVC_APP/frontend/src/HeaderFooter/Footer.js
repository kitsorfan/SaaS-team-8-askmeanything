import React from 'react'

import '../css/Footer.css'

function Footer() {
  return (
      <div className='footer text-center'>
          <div className="footerLink"><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>About</a></div>
          <div className="footerLink"><a href='http://regplanunit.survey.ntua.gr/st_Vescoukis.html'>Contact Us</a></div>
          <div className="footerLink"><a href='https://hub.softlab.ntua.gr/hub/projects/saas-8'> YouTrack</a></div>
          <div className="footerLink"><a href='https://github.com/ntua/SaaS-team-8-askmeanything'>GitHub</a></div>
          <div className="footerLink"><a href='https://courses.pclab.ece.ntua.gr/course/view.php?id=34'>Course Material</a></div>
  
      </div>
  )
}

export default Footer
