const db = require("../../models");
const question = db.question;
const sequelize = require("sequelize");




exports.questionsPerDay= (req, res) => {
  question.findAll({
    attributes: [
      [sequelize.literal('DATE(createdAt)'), 'day'],
      [sequelize.literal(`COUNT(*)`), 'value']
    ],
    group: 'day',
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

