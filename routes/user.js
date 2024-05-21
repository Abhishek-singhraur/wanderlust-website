const express = require("express");
const router  = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userControllers = require("../controller/users.js");
 
// route for the path /signup signup form or signUpuser
router.route("/signup")
.get(userControllers.signUpForm)
.post(wrapAsync(userControllers.signUpUser));

// /login path
router.route("/login")
.get(userControllers.loginForm)
.post(saveRedirectUrl,
   passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
  }),userControllers.loginUser);
  

router.get("/logout",userControllers.logoutUser);


module.exports = router; 