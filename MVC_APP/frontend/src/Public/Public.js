import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import QuestionsPerKeyword from './QuestionsPerKeyword'
import QuestionsPerDay from './QuestionsPerDay'
import AllQuestions from '../Questions/AllQuestions'
import NewQuestion from '../Questions/NewQuestion'
import NewAnswer from '../Questions/NewAnswer'
import AnswersOfQuestion from '../Questions/AnswersOfQuestion'
import MyQuestions from '../Questions/MyQuestions'


import Home from './Home'


import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import '../css/Public.css'

function Public() {
  return (
      <div>
        <Header/>
        <Container  className='environment'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/questionsPerKeyword' component={QuestionsPerKeyword} />
            <Route path='/questionsPerDay' component={QuestionsPerDay} />
            <Route path='/newQuestion' component={NewQuestion} />
            <Route path='/newAnswer' component={NewAnswer} />
            <Route path='/allQuestions' component={AllQuestions} />
            <Route path='/answersOfQuestion' component={AnswersOfQuestion} />
            <Route path='/myQuestions' component={MyQuestions} />


          </Switch>
        </Container>
        <Footer />
      </div>
  )
}

export default Public
