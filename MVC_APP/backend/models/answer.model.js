module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("questionTag", {
      answerID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
      },
     atext: {
       type: Sequelize.STRING(10000),
       allowNull: false
     },
    submissionTime: {
      type: Sequelize.DATE,
      allowNull: false
    }
    });
  
    return Answer;
  };