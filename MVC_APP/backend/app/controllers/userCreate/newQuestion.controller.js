const db = require("../../models");
const config = require("../../config/auth.config");
const question = db.question;

exports.newQuestion = (req, res) => {
    question.create({
        title: req.body.title,
        qtext: req.body.qtext,
        userID: req.userID
      })
        .then(user => {
            res.send({ message: "Question created succesfulyy" });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  };
  