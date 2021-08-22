const db = require("../../models");
const answer = db.answer;
const user = db.user;
const sequelize = require("sequelize");





exports.answersOfQuestion = (req, res) => {

    answer.findAll({
      where: {
        questionID: parseInt(req.body.questionID)
      },
      include: [  //double inner join
        {model: user,
        required: true,
        attributes: []}, 
        // {model: question,
        // required: true,
        // attributes: [['title','title'],['qtext','Question']]}
      ],
      raw: true,
      attributes:[
        [sequelize.literal('user.email'), 'email'],
        ['answerID','ID'],
        ['atext','Answer'],
        [sequelize.literal('DATE(answer.createdAt)'), 'day',]],
      
      order: [[sequelize.literal('ID'), 'DESC']]})
        .then(results => {
            res.send(results);
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  };
  