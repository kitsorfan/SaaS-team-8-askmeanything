const db = require("../../models");
const question = db.question;

exports.newQuestion = (req, res) => {
    question.create({
        title: req.body.title,
        qtext: req.body.qtext,
        tagID: req.body.qtag,
        userID: parseInt(req.userId)
      })
        .then(user => {
            res.status(201).send({ message: "Question created succesfuly" });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  };
  