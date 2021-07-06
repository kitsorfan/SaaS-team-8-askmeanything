module.exports = (sequelize, Sequelize) => {
    const answer = sequelize.define("answer", {
      answerID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
      },
     atext: {
       type: Sequelize.STRING(10000),
       allowNull: false
     }
    });
  
    return answer;
  };