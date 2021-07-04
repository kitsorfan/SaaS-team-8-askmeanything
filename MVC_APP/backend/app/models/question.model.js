module.exports = (sequelize, Sequelize) => {
    const question = sequelize.define("question", {
      questionID: {
        type: Sequelize.INTEGER,
        primaryKey: 1,
        autoIncrement: 1, 
        allowNull: 0
      },
      title: {
        type: Sequelize.STRING,
        allowNull: 0
      },
      qtext: {
        type: Sequelize.STRING(5000),
        allowNull: 0,
      },
     submissionTime: {
        type: Sequelize.DATE,
        allowNull: 0
      }
    });
  
    return question;
  };