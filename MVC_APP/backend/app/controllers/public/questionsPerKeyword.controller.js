const db = require("../../models");
const question = db.question;
const sequelize = require("sequelize");
const { questionTag } = require("../../models");

exports.questionsPerKeyword = (req, res) => {
  question.findAll({
      include:{
        model:questionTag,
        required: true,
        attributes: []
    },
    raw: true,
    attributes: [
      [sequelize.literal('questionTag.tag'),'id'],
      [sequelize.fn('COUNT', sequelize.col('tag')), 'value'],
],
group: 'questionTag.id'
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

