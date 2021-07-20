const db = require("../../models");
const question = db.question;
const sequelize = require("sequelize");




exports.questionsPerDay= (req, res) => {
  question.findAll({
    attributes: [
      [sequelize.literal('DATE(createdAt)'), 'date'],
      [sequelize.literal(`COUNT(*)`), 'count']
    ],
    group: 'date',
    limit: 7 //we will examine only the last week
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

