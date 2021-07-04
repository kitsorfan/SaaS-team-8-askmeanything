exports.allAccess = (req, res) => {
    res.status(200).send("Ask Me Anything (or just login/signup)");
  };

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};