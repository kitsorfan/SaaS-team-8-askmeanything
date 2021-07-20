const db = require("../../models");
const question = db.question;
const user = db.user;


exports.myQuestions = (req, res) => {

    question.findAll({
      where: {
        userID: parseInt(req.userId)
      },
      include: {
        model: user,
        required: true,
        attributes: ['email'],
        
      },
      raw: true,
      attributes: [['questionID','ID'],['title','Title'],['qtext','Question'],['createdAt','Submission Date']],
        order: [['questionId','DESC']]
      })
        .then(results => {
            res.send(results);
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  };
  