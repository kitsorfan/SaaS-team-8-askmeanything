const db = require("../../models");
const answer = db.answer;
const user = db.user;
const question = db.question;


exports.myAnswers = (req, res) => {

    answer.findAll({
      where: {
        userID: parseInt(req.userId)
      },
      include: [  //double inner join
        {model: user,
        required: true,
        attributes: ['email']}, 
        {model: question,
        required: true,
        attributes: [['title','title'],['qtext','Question']]}
      ],
      raw: true,
      attributes: [['answerID','ID'],['atext','Answer'],['createdAt','Submission Date']],
        order: [['answerID','DESC']]
      })
        .then(results => {
            res.send(results);
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  };
  