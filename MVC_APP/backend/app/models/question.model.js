module.exports = (sequelize, Sequelize) => {
    const question = sequelize.define("question", {
      questionID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      qtext: {
        type: Sequelize.STRING(5000),
        allowNull: false,
      }
    });
  
    return question;
  };