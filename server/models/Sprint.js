const Joi = require("joi");
const mongoose = require("mongoose");

const Sprint = mongoose.model(
  "Sprint",
  new mongoose.Schema({
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    members: {
      type: Array,
      required: true
    },
    project: {
      type: new mongoose.Schema({
        title: {
          type: String,
          required: true,
          minlength: 5
        }
      }),
      required: true
    }
  })
);

function validateSprint(sprint) {
  const schema = {
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    number: Joi.number(),
    members: Joi.array().required(),
    projectId: Joi.required()
  };

  return Joi.validate(sprint, schema);
}

exports.Sprint = Sprint;
exports.validate = validateSprint;
