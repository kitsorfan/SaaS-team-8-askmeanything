const db = require("../../models");
const question = db.question;
const questionTag = db.questionTag;
const hasTags = db.hasTags;
const sequelize = require("sequelize");



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




exports.questionsPerKeyword = (req, res) => {
  questionTag.findAll({
    include: [{
      model: question,
      attributes: [],
      through: hasTags,
      required: true,
      right: true,
    }],
    attributes: [
      ['tag','tag'],[sequelize.fn('COUNT', sequelize.col('tag')), 'n_tags']
    ],
    
    group: "tag"
  
  })
    .then(results => {
      if (!results) {
        return res.status(404).send({ message: "No questions available" });
      }
      const finaljson={
          results: results
      }
      res.status(200).send(finaljson)
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  })
};

