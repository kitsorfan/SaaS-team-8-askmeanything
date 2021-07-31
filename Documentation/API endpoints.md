# <center> API endpoints </center>


base URL: http://localhost:8080/ <br>
only accepts requests from URL: http://localhost:3000/

<br>


### 🟡TESTING 
`GET`/api/test/all           
`GET`/api/test/user
`GET`/api/test/initializeDB (**! warning: NOT SAFE !**)

<br>


### 🟠AUTHORIZATION 
`POST`/api/auth/signup           
`POST`/api/test/signin          

<br>


###  🟣PUBLIC AVAILABLE CONTENT 
`GET`/api/public/questionsPerKeyword     
`GET`/api/public/allTags     
`GET`/api/public/questionPerDay  
`GET`/api/public/countQuestions     

<br>


###  🟢USER CREATE QUESTION/ANSWER 
`POST`/api/user/newQuestion *(jwt required)*
`POST`/api/user/answerQuestion *(jwt required)*

<br>

### 🔵USER DATA 
`POST`/api/user/allQuestions *(jwt required)*<br>
`GET`/api/user/myQuestions *(jwt required)*<br>
`GET`/api/user/myAnswers   *(jwt required)*<br>
`GET`/api/user/contributionsPerDay *(jwt required)*







