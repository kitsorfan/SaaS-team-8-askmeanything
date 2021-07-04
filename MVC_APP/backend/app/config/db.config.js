module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "sqlpassword", //please don't hack us
    DB: "ama_mvc",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };