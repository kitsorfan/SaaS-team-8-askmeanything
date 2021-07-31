const db = require("../../models");
const questionTag = db.questionTag;




exports.allTags= (req, res) => {
  questionTag.findAll({
    attributes: [['id','value'],['tag','label']]
  })
    .then(results => { 
      if (!results) {
        return res.status(404).send({ message: "No tags available" });
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

