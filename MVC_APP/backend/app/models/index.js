const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,
    logging: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.question = require("../models/question.model.js")(sequelize, Sequelize);
db.questionTag = require("../models/questionTag.model.js")(sequelize, Sequelize);
db.answer = require("../models/answer.model.js")(sequelize, Sequelize);


db.user.hasMany(db.question, {foreignKey: "userID"});
db.question.belongsTo(db.user, {foreignKey: "userID"});

db.user.hasMany(db.answer, {foreignKey: "userID"});
db.answer.belongsTo(db.user, {foreignKey: "userID"});

db.question.hasMany(db.answer,{foreignKey: "questionID"});
db.answer.belongsTo(db.question,{foreignKey: "questionID"});

db.question.belongsToMany(db.questionTag, {
    through: "hasTags",
    foreignKey: "questionID",
    otherKey: "id"
  });
  db.questionTag.belongsToMany(db.question, {
    through: "hasTags",
    foreignKey: "id",
    otherKey: "questionID"
  });



db.BANNED = []; 
module.exports = db;