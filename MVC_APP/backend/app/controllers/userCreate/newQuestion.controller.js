const db = require("../../models");
const question = db.question;

exports.newQuestion = (req, res) => {
    question.create({
        title: req.body.title,
        qtext: req.body.qtext,
        userID: req.userID
      })
        .then(user => {
            res.send({ message: "Question created succesfuly" });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  };
  