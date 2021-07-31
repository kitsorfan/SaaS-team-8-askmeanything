import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from '../Auth/AuthContext'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import '../css/NewQuestion.css'

const axios = require('axios')



function NewAnswer() {
	const location = useLocation()
	const questionID = location.state?.questionID
	const [answer, setAnswer] = useState('')


  	const [validated, setValidated] = useState(false)

	const history = useHistory()
	const { signout } = useAuth()


	// post new answer
	const handleSubmit = e => {
		e.preventDefault()

		if ( answer === '') {
			e.stopPropagation()
			setValidated(true)
		} else {
			const accessToken = JSON.parse(localStorage.getItem('accessToken'))
			const params = new URLSearchParams(); // parameters at application/x-www-form-urlencoded
			params.append('atext', answer);
			params.append('questionID',parseInt(questionID));
			axios({
				method: 'post',
				url: 'http://localhost:8080/api/userCreate/newAnswer/',
				data: params,
				headers: {
					'x-access-token': `${accessToken}`,
				  'content-type': 'application/x-www-form-urlencoded'
				}
			  })
				.then(() =>{history.push('/')})
				.catch(error => {
					const status = error.response?.status
					if (status === 401) {
						signout()
						window.location.reload()
					}
				})
		}
	}


	return (
		<div className="questionBox">

			<Card.Header className='headerBox'>
            	<h5 className='mb-0'>Answer Question {questionID} 💬</h5>
          	</Card.Header>

			<Card.Body>
			<Form noValidate onSubmit={handleSubmit}>

			<Form.Group controlId='formGroupTextarea'>
			<Form.Label className='headerTitle'>Your Answer: </Form.Label>
			<Form.Control
			as='textarea'
			className="titleTextareaBox"
			rows={10}
			name='answer'
			onChange={e => setAnswer(e.target.value)}
			isInvalid={validated && answer === ''}
			isValid={validated && answer !== ''}
			/>
			<Form.Control.Feedback type='invalid' className="warningTextLeft">
			*I need YOU to answer this question!👆🏻
			</Form.Control.Feedback>


			</Form.Group>
			<Button className='signButton s1' type='submit'>Submit your answer✔</Button>
		
			</Form>
			</Card.Body>
		</div>

)
}

export default NewAnswer
