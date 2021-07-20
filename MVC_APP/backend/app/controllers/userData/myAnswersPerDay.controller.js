const db = require("../../models");
const answer = db.answer;
const user = db.user;
const question = db.question;
const sequelize = require("sequelize");

// attributes: [
//     [sequelize.literal('DATE(createdAt)'), 'date'],
//     [sequelize.literal(`COUNT(*)`), 'count']
//   ],
exports.myAnswersPerDay = (req, res) => {

    answer.findAll({
      where: {
        userID: parseInt(req.userId)
      },
      include: { // maybe useless
        model: user,
        required: true,
        attributes: ['email']}, 
      raw: true,
      attributes: [[sequelize.literal('DATE(answer.createdAt)'), 'date'],[sequelize.literal(`COUNT(*)`), 'count']],
      group: 'date'
      
      })
        .then(results => {
            res.send(results);
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  };
  