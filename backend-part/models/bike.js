const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");

const Joi = require("joi");

const bikeSchema = new Schema(
    {
        name: {
            type: String,
            minlength: 5,
            required: [true, "name is required"],
        },
        type: {
            type: String,
            minlength: 5,
            required: [true, "type is required"],
        },
        color: {
            type: String,
            minlength: 3,
            required: [true, "color is required"],

        },
        wheel_size: {
            type: Number,
            required: [true, "wheel size is required"],
        },
        price: {
            type: Number,
            required: [true, "price is required"],
        },
        description: {
            type: String,
            minlength: 10,
            required: [true, "price is required"],

        },
        stats: {
            type: String,
            enum: ["available", "busy", "unavailable"],
            default: "available",

        },
    },

    { versionKey: false, timestamps: true }
);

bikeSchema.post("save", mongooseError);


const statsSchema = Joi.object({
    stats: Joi.string().valid("available", "busy", "unavailable").required(),
});

const bikesSchema = Joi.object({
    name: Joi.string().min(5).required(),
    type: Joi.string().min(5).required(),
    color: Joi.string().min(3).required(),
    wheel_size: Joi.number().required(),
    price: Joi.number().required(),
    description: Joi.string().min(10).required(),
});



const schemas = {
    statsSchema,
    bikesSchema,

};

const Bike = model("bike", bikeSchema);

module.exports = {
    Bike,
    schemas,
};