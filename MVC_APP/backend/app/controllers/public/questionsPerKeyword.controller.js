const db = require("../../models");
const question = db.question;
const questionTag = db.questionTag;
const hasTags = db.hasTags;
const sequelize = require("sequelize");


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

