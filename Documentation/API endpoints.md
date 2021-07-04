# API endpoints
---------------------


base URL: http://localhost:8080/

## @@@@@@@@@@@@@@@@-- TESTING --@@@@@@@@@@@@@@@@
🟡/api/test/all        GET     works for anyone
🟡/api/test/user       GET     works for authorized users


## @@@@@@@@@@@@@@@@-- AUTORIZATION --@@@@@@@@@@@@@@@@
🟠/api/auth/signup    POST      send email - password 
🟠/api/test/signin    POST      send email - password, get token (jwt required)


## @@@@@@@@@@@@@@@@-- PUBLIC AVAILABLE CONTENT --@@@@@@@@@@@@@@@@
🟣/api/public/questionsPerKeyword   GET       
🟣/api/public/questionPerWeek       GET


## @@@@@@@@@@@@@@@@-- USER CREATE QUESTION/ANSWER--@@@@@@@@@@@@@@@@
🟢/api/user/newQuestion             POST        jwt-required
🟢/api/user/answerQuestion          POST        jwt-required


## @@@@@@@@@@@@@@@@-- USER CREATE QUESTION/ANSWER--@@@@@@@@@@@@@@@@
🔵/api/user/myQuestions             GET        jwt-required
🔵/api/user/myAnswers               GET        jwt-required
🔵/api/user/contributionsPerDay     GET        jwt-required


