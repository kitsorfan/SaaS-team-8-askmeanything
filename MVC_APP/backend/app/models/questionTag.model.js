module.exports = (sequelize, Sequelize) => {
    const questionTag = sequelize.define("questionTag", {
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
  
    return questionTag;
  };