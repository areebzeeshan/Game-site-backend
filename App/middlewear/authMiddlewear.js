const Admin = require("../Firebase/firebase.js");
// const firebase = require("firebase");

const authCheck = async (req, res, next) => {
  console.log(Admin, "from here  "); //token

  try {
    const firebaseUser = await Admin.auth().verifyIdToken(
      req.headers.authtoken
    );
    req.user = firebaseUser;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }

  // next()
};

module.exports = authCheck;
