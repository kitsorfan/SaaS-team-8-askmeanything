# <center> API endpoints </center>


base URL: http://localhost:8080/

### 🟡TESTING 
`GET`/api/test/all           
`GET`/api/test/user             users


### 🟠AUTORIZATION 
`POST`/api/auth/signup           
`POST`/api/test/signin          *(jwt required)*


###  🟣PUBLIC AVAILABLE CONTENT 
`GET`/api/public/questionsPerKeyword          
`GET` /api/public/questionPerWeek       


###  🟢USER CREATE QUESTION/ANSWER 
`POST`/api/user/newQuestion 	        *(jwt required)*
`POST`/api/user/answerQuestion          *(jwt required)*


### 🔵USER DATA 
`GET`/api/user/myQuestions             *(jwt required)*
`GET`/api/user/myAnswers               *(jwt required)*
`GET`/api/user/contributionsPerDay     *(jwt required)*


