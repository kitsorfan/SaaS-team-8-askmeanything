module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
      userID: {
        type: Sequelize.INTEGER,
        primaryKey: 1,
        autoIncrement: 1,
        allowNull: 0

      },
      email: {
        type: Sequelize.STRING,
        allowNull: 0
      },
      password: {
        type: Sequelize.STRING,
        allowNull: 0
      }
    });
  
    return user;
  };