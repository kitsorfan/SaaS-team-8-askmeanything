const db = require("../models");
var bcrypt = require("bcryptjs");
const user = db.user;
const question = db.question;
const questionTag = db.questionTag;
const answer = db.answer;
const hastags = db.hastags;

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
    .then(user => {
        res.send({ message: "Initialization is correct" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

  question.create({
      title: "Is the earth flat?",
      qtext: "Is there any scientific evidence that earth is flat? We all know that is cube-shaped, right?",
      userID: 1
  })
  question.create({
    title: "Can I become president of the US?",
    qtext: "I am greek. Can I become president?",
    userID: 1
})
question.create({
  title: "Is Google watching me?",
  qtext: "Do google know that I am 42 years old?",
  userID: 1
})

question.create({
  title: "Best football team?",
  qtext: "Is Thrasivoulos the best football team?",
  userID: 1
})
question.create({
  title: "Is Google a football team?"
})
questionTag.create({
  tag: "conspiracy"
})
questionTag.create({
  tag: "USA"
})
questionTag.create({
  tag: "football"
})
questionTag.create({
  tag: "google"
})
answer.create({
  atext: "No, earth is not flat. It's a sphere.",
  userID:  2,
  questionID: 1
})
answer.create({
  atext: "No, you can't",
  userID:  2,
  questionID: 2
})
answer.create({
  atext: "Maybe. If you look for the answer of the universe, then 42 is your key.",
  userID:  2,
  questionID: 3
})
};