const db = require("../../models");
const answer = db.answer;

exports.newAnswer = (req, res) => {
    answer.create({
        atext: req.body.atext,
        userID: parseInt(req.userId),
        questionID: parseInt(req.body.questionID)
      })
        .then(user => {
            res.send({ message: "Answer created succesfuly" });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  };
  