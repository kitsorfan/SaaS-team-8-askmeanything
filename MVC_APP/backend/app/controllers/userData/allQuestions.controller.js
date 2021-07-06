const db = require("../../models");
const question = db.question;

exports.allQuestions = (req, res) => {
    question.findAll({
      limit: parseInt(req.body.limit),
        order: [['questionId','DESC']]
      })
        .then(results => {
            res.send(results);
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  };
  