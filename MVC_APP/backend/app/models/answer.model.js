module.exports = (sequelize, Sequelize) => {
    const answer = sequelize.define("questionTag", {
      answerID: {
        type: Sequelize.INTEGER,
        primaryKey: 1,
        autoIncrement: 0, 
        allowNull: 0
      },
     atext: {
       type: Sequelize.STRING(10000),
       allowNull: 0
     },
    submissionTime: {
      type: Sequelize.DATE,
      allowNull: 0
    }
    });
  
    return answer;
  };