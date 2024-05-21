const express = require("express");
const router  = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner} = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});   


 // merge the same path route index route , create listing//
router.
route("/")
.get( wrapAsync(listingController.index) )
.post( isLoggedIn,upload.single('listing[image]'),wrapAsync(listingController.createListing)); 


//New Route
router.get("/new",isLoggedIn,listingController.renderForm);

// /:id path show update and delete route
router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner, upload.single('listing[image]'),wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destoryListing));



//Edit Route
router.get("/:id/edit",  isLoggedIn,isOwner,
 wrapAsync(listingController.editListing));



module.exports = router;