import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'
import { useAuth } from '../Auth/AuthContext'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import '../css/NewQuestion.css'

const axios = require('axios')



function NewQuestion() {
	const [title, setTitle] = useState('')
	const [question, setQuestion] = useState('')
	const [tagsAll, setTagsAll] = useState([])
	const [tagSelected, setTagSelected] = useState(0)
	const [tagValidity, setTagValidity] = useState(0)
	const [didSubmit, setDidSubmit] = useState(0)
  	const [validated, setValidated] = useState(false)

	const history = useHistory()
	const { signout } = useAuth()

		const customStyles = {
			control: (base, state) => ({
			  ...base,
			  "font-size": "2.2vh",
			  "margin-bottom": "1vh",
			  background: "rgba(250, 235, 215, 0.455)",
			  borderRadius: state.isFocused ? "1vh 1vh 0 0" : 3,
			  
			
			  boxShadow: state.isFocused ? null : null,
			  "&:hover": {
				// Overwrittes the different states of border
				background: "rgba(250, 235, 215, 0.655)"
			  }
			  
			}),
			menu: base => ({
			  ...base,
			  "font-size": "2.2vh",
			  // override border radius to match the box
			  borderRadius: 1,
			  // kill the gap
			  marginTop: 0,
			  background: "rgba(250, 235, 215, 0.455)"
			}),
			menuList: base => ({
			  ...base,
			  "font-size": "2.2vh",
			  // kill the white space on first and last option
			  padding: 1,
				background: "rgba(250, 235, 215, 0.755)"

			})
		  };
	// get all keywords
	useEffect(() => {
		axios.get("http://localhost:8080/api/public/allTags")
			.then(response => {
				const { results } = response.data
				setTagsAll(results)
			})
			.catch(error => console.log(error))
	}, [])


	// select tags
	const handleChange = event => {
		setTagSelected(parseInt(event.value));
    	setTagValidity(1);
	}

	// post new question
	const handleSubmit = e => {
		e.preventDefault()
    	setDidSubmit(1) // for tags

		if (title === '' || question === '' || tagValidity === 0) {
			e.stopPropagation()
			setValidated(true)
		} else {
			const accessToken = JSON.parse(localStorage.getItem('accessToken'))
			const params = new URLSearchParams(); // parameters at application/x-www-form-urlencoded
			params.append('title', title);
			params.append('qtext', question);
			params.append('qtag',parseInt(tagSelected));
			axios({
				method: 'post',
				url: 'http://localhost:8080/api/userCreate/newQuestion/',
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
            	<h5 className='mb-0'>New Question 💬</h5>
          	</Card.Header>

			<Card.Body>
			<Form noValidate onSubmit={handleSubmit}>
			<Form.Group controlId='formGroupTitle'>
			<Form.Label className='headerTitle'>Title:</Form.Label>

			<Form.Control
			className="titleTextBox"
			type='text'
			name='title'
			onChange={e => setTitle(e.target.value)}
			isInvalid={validated && title === ''}
			isValid={validated && title !== ''}
			/>
			<Form.Control.Feedback  type='invalid'  className="warningTextLeft">
			*Whoa wait!🤨 You didn't give me a title.
			</Form.Control.Feedback>
			</Form.Group>

			<label className='headerTitle'>Tag:</label>
			<Select 
			styles={customStyles}
			color= "#023950"
			options={tagsAll} 
			onChange={handleChange}
			type={tagSelected === 0}
			isValid={validated && tagSelected !== 0}
			/>
			{(tagValidity===0 && didSubmit===1)? 
			<div className="warningTextLeft">
			*Please select a tag, it helps us keeping the forum well-organised!🤗
			</div>:
			<div></div>}
			

			<Form.Group controlId='formGroupTextarea'>
			<Form.Label className='headerTitle'>Question: </Form.Label>
			<Form.Control
			as='textarea'
			className="titleTextareaBox"
			rows={10}
			name='title'
			onChange={e => setQuestion(e.target.value)}
			isInvalid={validated && question === ''}
			isValid={validated && question !== ''}
			/>
			<Form.Control.Feedback type='invalid' className="warningTextLeft">
			*Would you like to ask a question? You cannot leave this empty😅
			</Form.Control.Feedback>


			</Form.Group>

	
	
			<Button className='signButton s1' type='submit'>Ask your question</Button>
		
			</Form>
			</Card.Body>
		</div>

)
}

export default NewQuestion
