import React from 'react'

import ntuaLogo from '../css/ntuaLogoBlack.png'; 

import '../css/Home.css'

function Home() {
  return (
      <div className='homeBigBox'>
        
          <div className='homeInnerBox'>
            <a href="http://www.ntua.gr/el/"><span> <img alt="NTUA Logo" className="NtuaLogo" src={ntuaLogo} /></span></a>
            <div className='NtuaText'>
            <h3>NTUA 〰 ECE 〰 SaaS </h3>
            <h5>Team 8 🔹 Ask Me Anything</h5>
            <li><b>Stylianos Kandylakis</b> - el17088 🔐 </li>
            <li><b>Kitsos Orfanopoulos</b> - el17025 🗂</li>
            <li><b>Vasilis Papalexis</b> - el17816🖌</li>
            </div>
            </div>
      
          <div className='fourBigBox'>
            <a href='/questionsPerKeyword'><div className='fourTexts'> Questions per Keyword📊</div></a>
            <a href='/questionsPerDay'><div className='fourTexts'> Questions per Day📅</div></a>
            <a  href='/newQuestion'><div className='fourTexts'> New Question💬</div></a>
            <a href='/allQuestions'><div className='fourTexts'> Explore all Questions🧾</div></a>       
          </div>
      </div>
  )
}

export default Home
