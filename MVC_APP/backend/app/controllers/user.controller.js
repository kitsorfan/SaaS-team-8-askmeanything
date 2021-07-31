const db = require("../models");
var bcrypt = require("bcryptjs");
const user = db.user;
const question = db.question;
const questionTag = db.questionTag;
const answer = db.answer;


exports.testAll = (req, res) => {
    res.status(200).send("Ask Me Anything (or just login/signup😁)");
  };

exports.testUser = (req, res) => {
  res.status(200).send("User Content.");
};






exports.initializeDB = (req, res) => {
  // Save user to Database
  user.create({
    email: "kitsos@mail.com",
    password: bcrypt.hashSync("secret", 8)
  })
  user.create({
    email: "stelios@mail.com",
    password: bcrypt.hashSync("secret", 8)
  })
  user.create({
    email: "vasilis@mail.com",
    password: bcrypt.hashSync("secret", 8)
  })
    .then(user => {
      res.send({ message: "Initialization is correct" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
    
    
    questionTag.create({
      tag: "programming"
    })
    questionTag.create({
      tag: "sports"
    })
    questionTag.create({
      tag: "social life"
    })
    questionTag.create({
      tag: "religion"
    })
    questionTag.create({
      tag: "military"
    })
    questionTag.create({
      tag: "politics"
    })
    questionTag.create({
      tag: "school"
    })
    
question.create({
  title: "Best programming language",
  qtext: "I think that C is perhaps the best programming language ever! But I heard javascript is very popular. Which is the best?",
  userID: 1,
  tagID: 1
})
question.create({
  title: "Worst nightmare for a programmer",
  qtext: "What is your worst nightmare as a programmer?",
  userID: 1,
  tagID: 1
})
question.create({
  title: "Pointers in Java",
  qtext: "Does Java has pointers?",
  userID: 2,
  tagID: 1
})
question.create({
  title: "Football or Soccer",
  qtext: "Should I say that I am a soccer player or a football player?",
  userID: 1,
  tagID: 2
})
question.create({
  title: "Gym or track?",
  qtext: "Should I run on the gym or its better outside?",
  userID: 3,
  tagID: 2
})

question.create({
  title: "Programming and relationships?",
  qtext: "Is a programmer the ideal husband?",
  userID: 1,
  tagID: 3
})
question.create({
  title: "42 Religion?",
  qtext: "Why so many people think 42 is a holy number?",
  userID: 3,
  tagID: 4
})
question.create({
  title: "Best lazy military carreer",
  qtext: "Best military for someone who don't want to be get tired?",
  userID: 1,
  tagID: 5
})

question.create({
  title: "Paratrooper or marine?",
  qtext: "Which is the best special force? How about hard training?",
  userID: 2,
  tagID: 5
})
question.create({
  title: "What is Obama Care?",
  qtext: "What is the Obama Care program? Did it helped the american people?",
  userID: 1,
  tagID: 6
})
question.create({
  title: "Merkel, Makron or Johnson?",
  qtext: "Which of these three handle best the pandemic?",
  userID: 3,
  tagID: 6
})
question.create({
  title: "Does Iraq has nuclear weapons?",
  qtext: "Should we get worried about secret nuclear programs in Iraq? Does ISS has scientists is its ranks?",
  userID: 1,
  tagID: 6
})
question.create({
  title: "Is Covid19 a chinish biological weapon?",
  qtext: "Did  China created coronavirus on purpose?",
  userID: 2,
  tagID: 6
})
question.create({
  title: "Quit Shool",
  qtext: "Can I quit school?",
  userID: 3,
  tagID: 7
})
question.create({
  title: "NTUA or UoA",
  qtext: "Should I attend informatics at UoA or ECE at NTUA?",
  userID: 1,
  tagID: 7
})
};