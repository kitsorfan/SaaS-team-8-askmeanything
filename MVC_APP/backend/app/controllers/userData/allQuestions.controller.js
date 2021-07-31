const db = require("../../models");
const question = db.question;
// const user = db.user;
const sequelize = require("sequelize");
const { questionTag } = require("../../models");
const { user } = require("../../models");





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

    question.findAll({
      include: [{
        model: user,
        required: true,
        attributes: [],
      },
      { 
        model:questionTag,
        required: true,
        attributes: []
      }],
      raw: true,
      attributes: [
        [sequelize.literal('user.email'), 'email'],
        ['questionID','ID'],
        ['title','Title'],
        ['qtext','Question'],
        [sequelize.literal('DATE(question.createdAt)'), 'day'],
        [sequelize.literal('questionTag.tag'),'tag']],
      limit: parseInt(req.body.limit),
      offset: parseInt(req.body.offset),
        order: [['questionId','DESC']]
      })
        .then(results => {
            res.send(results);
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  };
  