// const { authJwt } = require("../../middleware");
const controller = require("../../controllers/public/countQuestions.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-observatory-auth, Origin, Content-Type, Accept"
    );
    next();
  });

 app.get("/api/public/countQuestions",
      controller.countQuestions);
};