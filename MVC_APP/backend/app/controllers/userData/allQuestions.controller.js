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
  GROUP BY q.questionID
  ORDER BY q.questionID DESC
  LIMIT ?
  OFFSET ?
`

function date_string_from_datetime(x) {
  const temp = readable_datetime_string(x);
  var date = '';
  for (i = 0; i <= 9; i++)
    date += temp[i];

  return date;
}

function readable_datetime_string(x) {
 return x.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

function datetime_from_int(x, from_flag) {
const temp = String(x);
const year = temp[0] + temp[1] + temp[2] + temp[3];
const month = temp[4] +  temp[5];
const day = temp[6] + temp[7];
var date = year + '-' + month + '-' + day;
if (from_flag) {
  date += ' 01:00:01';
}
else {
  date += ' 23:59:59';
}

var datetime = new Date(date);
datetime.setTime( datetime.getTime() - new Date().getTimezoneOffset()*60*1000 );
return(new Date(datetime));
}


exports.allQuestions = (req, res) => {
   question.sequelize.query(
     query,
    {
      replacements: [parseInt(req.body.limit),parseInt(req.body.offset)],
      type: QueryTypes.SELECT
    }
  )
  //   question.findAll({
  //     include: [{
  //       model: user,
  //       required: true,
  //       attributes: [],
  //       where: {
  //         questionID: sequelize.col('question.QuestionID')
  //       }
  //     },
  //     { 
  //       model:questionTag,
  //       required: true,
  //       attributes: [],
  //       where: {
  //         questionID: sequelize.col('question.QuestionID')
  //       }
  //     },
  //     { 
  //       model:answer,
  //       required: false,
  //       attributes: [[sequelize.literal('(answerID)'), 'asd']],
  //       where: {
  //         questionID: sequelize.col('question.QuestionID')
  //       }
  //       // attributes: [],
      
  //     },
  //   ],
  //     raw: true,
  //     attributes: [
  //       [sequelize.literal('user.email'), 'email'],
  //       ['questionID','ID'],
  //       ['title','Title'],
  //       ['qtext','Question'],
  //       [sequelize.literal('DATE(question.createdAt)'), 'day'],
  //       [sequelize.literal('questionTag.tag'),'tag']],

  //     limit: parseInt(req.body.limit),
  //     offset: parseInt(req.body.offset),

  //       order: [['questionId','DESC']],
  //       group: sequelize.col('question.QuestionID') 
  //     })
        .then(results => {
            res.send(results);
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });

  };
  