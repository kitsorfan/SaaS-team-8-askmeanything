const db = require("../../models");
const question = db.question;
const sequelize = require("sequelize");
const Sequelize = require("sequelize");
const { questionTag } = require("../../models");
const { user } = require("../../models");
const { answer } = require("../../models");
const { QueryTypes } = require('sequelize');




const query = `
  SELECT 
    u.email as 'email',
    q.questionID as 'ID',
    q.title as 'Title',
    q.qtext as 'Question',
    DATE(q.createdAt) as 'day',
    qt.tag AS 'tag',
      COUNT(a.questionID) as 'countAnswers'
  FROM questions AS q
  INNER JOIN users AS u
    ON u.userID=q.userID
  INNER JOIN questiontags as qt
  ON qt.id=q.tagID
  LEFT JOIN answers as a
    ON a.questionID=q.questionID
  WHERE u.userID=?
  GROUP BY q.questionID
  ORDER BY q.questionID DESC
`

exports.myQuestions = (req, res) => {
   question.sequelize.query(
     query,
    {
      replacements: [(parseInt(req.userId))],
      type: QueryTypes.SELECT
    }
  )
        .then(results => {
            res.send(results);
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });

  };
  


// const db = require("../../models");
// const question = db.question;
// const user = db.user;


// exports.myQuestions = (req, res) => {

//     question.findAll({
//       where: {
//         userID: parseInt(req.userId)
//       },
//       include: {
//         model: user,
//         required: true,
//         attributes: ['email'],
        
//       },
//       raw: true,
//       attributes: [['questionID','ID'],['title','Title'],['qtext','Question'],['createdAt','Submission Date']],
//         order: [['questionId','DESC']]
//       })
//         .then(results => {
//             res.send(results);
//         })
//         .catch(err => {
//           res.status(500).send({ message: err.message });
//         });
//   };
  