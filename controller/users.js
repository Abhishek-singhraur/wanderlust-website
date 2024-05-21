const User = require("../models/user");

module.exports.signUpForm = (req,res) => {
    res.render("users/signup.ejs");
};

module.exports.signUpUser = async(req,res) => {
    try {
        let{username,email,password} = req.body;
  const  newUser = new User({email,username});
  const registeredUser = await User.register(newUser,password);
  req.login(registeredUser,(err) => {
    if(err) {
        return next(err);
    }
    req.flash("success","welcome to Wonderlust");
   res.redirect("/listings");
  });
   } catch (e) {
        req.flash("error",e.message);
        res.redirect("/signup");
    }
};

module.exports.loginForm = (req,res) => {
    res.render("users/login.ejs");
};

module.exports.loginUser =  async (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
   res.redirect(redirectUrl);
  };

  module.exports.logoutUser = (req,res,next) => {
    req.logout((err) => {
        if(err) {
            next(err);
        }
    })
    req.flash("success","you are logged out!");
    res.redirect("/listings");
};
