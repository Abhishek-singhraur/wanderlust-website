const Joi = require("joi");

module.exports = {
  listingSchema: Joi.object({
    listing: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      location: Joi.string().required(),
      country: Joi.string().required(),
      price: Joi.number().required(),
      image: Joi.string().allow("", null),
    }).required(),
  }),

  reviewSchema: Joi.object({
    review: Joi.object({
      comment: Joi.string().required(),
      rating: Joi.number().required(),
      // createdAt: Joi.date().required(),
    }).required(),
  }),
};

