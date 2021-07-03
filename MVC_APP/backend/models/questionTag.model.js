module.exports = (sequelize, Sequelize) => {
    const QuestionTag = sequelize.define("questionTag", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
      },
     tag: {
       type: Sequelize.STRING,
       allowNull: false
     }
    });
  
    return QuestionTag;
  };