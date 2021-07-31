const db = require("../../models");
const question = db.question;
const sequelize = require("sequelize");




exports.countQuestions= (req, res) => {
  question.findAll({
    attributes:
    [[sequelize.literal(`COUNT(*)`), 'data']]
  })
    .then(results => { 
      if (!results) {
        return res.status(404).send({ message: "No tags available" });
      }
     
      res.status(200).send(results)
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  })
};

