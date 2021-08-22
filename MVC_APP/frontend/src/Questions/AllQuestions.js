import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Auth/AuthContext'
import PaginationComponent from './Pagination'
import Card from 'react-bootstrap/Card'

import '../css/AllQuestions.css'


import qs from 'qs';

const axios = require('axios')

function AllQuestions() {
  const { signout } = useAuth()

  const [questions, setQuestions] = useState([])
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize= 10


  
  useEffect(() => {
    axios.get("http://localhost:8080/api/public/countQuestions")
        .then(response => setTotalQuestions((response.data[0].data)))
        .catch(error => console.log(error))
  }, )


  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const params = {
      'limit': pageSize,
      'offset': (currentPage-1)*pageSize,
    };
    axios({
      method: 'post', //some problem with axios, didn't support get. I changed the backend
      url: 'http://localhost:8080/api/userData/allQuestions/',
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
          <h5 className='mb-0'>Explore all Questions 📃</h5>
        </Card.Header>

        <Card.Body>
          
            {questions.map(question => (
              <div className='QuestionBox'>
              <div className="fourHead">
                <span className="id">Question {question.ID}</span> ▪ 
                
                <span className="tag" > #{question.tag}</span>  ▪ 
                <span className="email"> 👤 {question.email}</span> 
                <span className="day"> 📅  {question.day}</span> 
              </div>
              <hr className="line"></hr>
              <div className="centralBox">
              <h4 className="qTitle">{question.Title}</h4>
              <div className="Question">{question.Question.split('\n').map(str => <p className="paragraph">{str}</p>)}</div>
              </div>
              <Link className="btn answerButton s3" to={{
                   pathname: "/newAnswer",
                   state: {questionID: parseInt(question.ID)}
              }}>Answer this question✏</Link>
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
          
          <PaginationComponent
            
              totalItems={totalQuestions}
              pageSize={pageSize}
              pageRange={pageSize}
              pageState={[currentPage, setCurrentPage]}
          />
        </Card.Body>
      </div>
  )
}

export default AllQuestions
