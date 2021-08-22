import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useLocation } from 'react-router-dom'
import { useAuth } from '../Auth/AuthContext'

import Card from 'react-bootstrap/Card'

import '../css/AllQuestions.css'


import qs from 'qs';

const axios = require('axios')

function AnswersOfQuestion() {
  const location = useLocation()
  const countAnswers = location.state?.countAnswers
  const questionID = location.state?.questionID
  const questionTitle = location.state?.questionTitle
  const questionText = location.state?.questionText



  const { signout } = useAuth()
  const [answers, setAnswers] = useState([])



  



  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const params = {
      'questionID': questionID,
    };
    axios({
      method: 'post', //some problem with axios, didn't support get. I changed the backend
      url: 'http://localhost:8080/api/userData/answersOfQuestion/',
      data: qs.stringify(params),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-access-token': `${accessToken}`
      }
      })
        .then(response => {setAnswers(response.data)})
        .catch(error => {
          const status = error.response?.status
          if (status === 401) {
            signout()
            window.location.reload()
          }
        })
  }, )



  return (
      <div className='questionBox'>
        <Card.Header className='headerBoxAnswer'>
          <h4 className='mb-0'><b>{questionID}.</b> {questionTitle}  📃</h4>
          <h8 className="ID"><b>{countAnswers}</b> answer(s) available</h8>
          <div className='centralBox'>
            <h5 className='mb-0'>{questionText.split('\n').map(str => <p className="paragraph">{str}</p>)} </h5>
          </div>

        </Card.Header>

        <Card.Body>
          
            {answers.map(answer => (
              <div className='QuestionBox'>
              <div className="fourHead">
                <span className="id">Answer ID #{answer.ID}</span> ▪ 
              
                <span className="email"> 👤 {answer.email}</span> 
                <span className="day"> 📅  {answer.day}</span> 
              </div>
              <hr className="line"></hr>
              <div className="centralBox">
              <h4 className="qTitle">{answer.Title}</h4>
              <div className="Question">{answer.Answer.split('\n').map(str => <p className="paragraph">{str}</p>)}</div>
              </div>
          
            
              </div>

            ))}
           

        </Card.Body>
        <div>
        <Link className="btn answerButton s2" to={{
                   pathname: "/allQuestions",
              }}>Go back to the Questions</Link>
        </div>
        <div>
        <Link className="btn answerButton s3" to={{
                   pathname: "/newAnswer",
                   state: {questionID: questionID}
              }}>Give a new answer✏</Link>
        </div>

      </div>
  )
}

export default AnswersOfQuestion
