const { Router } = require("express");
const router = Router();

const {
  signUpHandler,
  singInHandler,
  resetPasswordHandler,
} = require("../controllers/auth");
//----------- LET'S PLAY WITH FIREBASE AUTH WITH NODE-JS--------------------------

//-------create new account route----------
router.post("/sign-up", signUpHandler);

//---------- sign in route-------------
router.post("/sign-in", singInHandler);

//------- forgot password route----------
router.put("/forgot-password", resetPasswordHandler);

module.exports = router;
