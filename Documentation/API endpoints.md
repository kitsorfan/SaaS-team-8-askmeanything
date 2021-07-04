# <center> API endpoints </center>


base URL: http://localhost:8080/

### TESTING ✅
🟡/api/test/all        `GET`   
🟡/api/test/user       `GET`      users


### AUTORIZATION 🔐
🟠/api/auth/signup    `POST`       
🟠/api/test/signin    `POST`      *(jwt required)*


###  PUBLIC AVAILABLE CONTENT 📊
🟣/api/public/questionsPerKeyword   `GET`       
🟣/api/public/questionPerWeek       `GET`


###  USER CREATE QUESTION/ANSWER ❔
🟢/api/user/newQuestion 	`POST`        *(jwt required)*
🟢/api/user/answerQuestion   `POST`       *(jwt required)*


### USER DATA 🧾
🔵/api/user/myQuestions         `GET`    *(jwt required)*
🔵/api/user/myAnswers           `GET`    *(jwt required)*
🔵/api/user/contributionsPerDay `GET`    *(jwt required)*


