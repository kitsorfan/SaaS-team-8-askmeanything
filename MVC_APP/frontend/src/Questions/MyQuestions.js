import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Auth/AuthContext'
import Card from 'react-bootstrap/Card'

import '../css/AllQuestions.css'


import qs from 'qs';

const axios = require('axios')

function MyQuestions() {
  const { signout } = useAuth()

  const [questions, setQuestions] = useState([])



  
 


  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const params = {
      // 'limit': pageSize,
      // 'offset': (currentPage-1)*pageSize,
    };
    axios({
      method: 'get', //some problem with axios, didn't support get. I changed the backend
      url: 'http://localhost:8080/api/userData/myQuestions',
      data: qs.stringify(params),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-access-token': `${accessToken}`
      }
      })
        .then(response => {setQuestions(response.data)})
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
        <Card.Header className='headerBox'>
          <h5 className='mb-0'>Your Questions📜</h5>
        </Card.Header>

        <Card.Body>
        {(questions=='')? <div className="alignCenter">
        <Link className="btn  s2 alignCenter" to={{
                pathname: "/newQuestion",

              }}>😮 You have no questions. Ask your 1st question now! 💡 </Link>
        

        </div>:
        <div> 
            {questions.map(question => (
              <div className='QuestionBox'>
              <div className="fourHead">
                <span className="id">Question {question.ID}</span> ▪ 
                
                <span className="tag" > #{question.tag}</span>   
                <span className="day"> 📅  {question.day}</span> 
              </div>
              <hr className="line"></hr>
              <div className="centralBox">
              <h4 className="qTitle">{question.Title}</h4>
              <div className="Question">{question.Question.split('\n').map(str => <p className="paragraph">{str}</p>)}</div>
              </div>
 
              {question['countAnswers'] ? <div>
              <Link className="btn answerButton s2" to={{
                pathname: "/answersOfQuestion",
                   state: {questionID: parseInt(question.ID), 
                          countAnswers: parseInt(question['countAnswers']),
                          questionTitle: question.Title,
                          questionText: question.Question
                          }
              }}>View {question['countAnswers']} answer(s)🔍 </Link>
                  </div>
              : <div> </div>

              }  
              </div>

            ))}

            </div>
        }
        </Card.Body>
      </div>
  )
}

export default MyQuestions
