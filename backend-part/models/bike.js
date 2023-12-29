const { Schema, model } = require('mongoose');
const { mongooseError } = require('../helpers');

const Joi = require('joi');

const bikeRegex = /^Bike-2024-\d{3}$/;

const bikeSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 5,
      required: [true, 'name is required'],
    },
    type: {
      type: String,
      minlength: 5,
      required: [true, 'type is required'],
    },
    color: {
      type: String,
      minlength: 3,
      required: [true, 'color is required'],
    },
    wheel_size: {
      type: Number,
      minlength: 1,
      maxlength: 100,
      required: [true, 'wheel size is required'],
    },
    price: {
      type: Number,
      minlength: 1,
      maxlength: 999999,
      required: [true, 'price is required'],
    },
    id: {
      type: String,
      match: bikeRegex,
      required: [true, 'ID is required'],
      unique: true,
    },
    description: {
      type: String,
      minlength: 5,
      required: [true, 'description is required'],
    },
    stats: {
      type: String,
      enum: ['available', 'busy', 'unavailable'],
      default: 'available',
    },
  },

  { versionKey: false, timestamps: true }
);

bikeSchema.post('save', mongooseError);

const statsSchema = Joi.object({
  stats: Joi.string().valid('available', 'busy', 'unavailable').required(),
});

const bikesSchema = Joi.object({
  name: Joi.string().min(5).max(20).required(),
  type: Joi.string().min(5).max(20).required(),
  color: Joi.string().min(3).max(15).required(),
  wheel_size: Joi.number().min(1).max(100).required(),
  price: Joi.number().min(1).max(999999).required(),
  description: Joi.string().min(5).required(),
  id: Joi.string().pattern(bikeRegex).required(),
});

const schemas = {
  statsSchema,
  bikesSchema,
};

const Bike = model('bike', bikeSchema);

module.exports = {
  Bike,
  schemas,
};
