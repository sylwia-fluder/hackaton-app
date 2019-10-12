const Joi = require("joi");
const mongoose = require("mongoose");

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    createdAt: {
      type: Date,
      default: Date.now
    },
    title: {
      type: String,
      minlength: 10,
      maxlength: 100,
      required: true
    },
    done: {
      type: Boolean,
      default: false
    },
    sprint: {
      type: new mongoose.Schema({
        number: {
          type: Number,
          minlength: 0
        }
      })
    },
    tasker: {
      type: new mongoose.Schema({
        name: {
          type: String,
          required: true,
          minlength: 5
        }
      })
    }
  })
);

function validateTask(sprint) {
  const schema = {
    title: Joi.string()
      .min(10)
      .max(100)
      .required(),
    done: Joi.boolean(),
    sprintId: Joi.string().required(),
    taskerId: Joi.string().required()
  };

  return Joi.validate(sprint, schema);
}

exports.Task = Task;
exports.validate = validateTask;
