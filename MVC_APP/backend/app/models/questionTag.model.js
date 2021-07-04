module.exports = (sequelize, Sequelize) => {
    const questionTag = sequelize.define("questionTag", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: 1,
        autoIncrement: 1, 
        allowNull: 0
      },
     tag: {
       type: Sequelize.STRING,
       allowNull: 0
     }
    });
  
    return questionTag;
  };