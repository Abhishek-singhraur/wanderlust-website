const express = require("express");
const router  = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview,isLoggedIn, isReviewOwner} = require("../middleware.js");
const reviewControllers = require("../controller/reviews.js");


  
  router.post("/",validateReview ,isLoggedIn,wrapAsync(reviewControllers.createReview));
  
  //review delete route
    
  router.delete("/:reviewId",isLoggedIn,isReviewOwner, wrapAsync(reviewControllers.destoryReview));

  module.exports = router;