const Joi = require('joi');
const mongoose = require('mongoose');
  
const FeedbackSprint = mongoose.model('FeedbackSprint', new mongoose.Schema({
    giver: {
        type: new mongoose.Schema({
            name: {
                type: String,
                minlength: 5,
                maxlength: 50
            }
        }),
        required: true
    },
    taker: {
        type: new mongoose.Schema({
            name: {
                type: String,
                minlength: 5,
                maxlength: 50
            }
        }),
        required: true
    },
    sprint: {
        type: new mongoose.Schema({
            number: Number
        }),
        required: true
    },
    answer1: {
        type: Number,
        min: 1,
        max: 5,
    },
    answer2: {
        type: Number,
        min: 1,
        max: 5,
    },
    answer3: {
        type: Number,
        min: 1,
        max: 5,
    },
    answer4: {
        type: Number,
        min: 1,
        max: 5,
    },
    answer5: String,
    answer6: String,
    answer7: String,
    answer8: String,
    answer9: String,
}));

function validateFeedbackSprint(feedbackSprint) {
    const schema = {
      giverId: Joi.required(),
      takerId: Joi.required(),
      sprintId: Joi.required(),
      answer1: Joi.number(),
      answer2: Joi.number(),
      answer3: Joi.number(),
      answer4: Joi.number(),
      answer5: Joi.string(),
      answer6: Joi.string(),
      answer7: Joi.string(),
      answer8: Joi.string(),
      answer9: Joi.string(),
    };
    
    return Joi.validate(feedbackSprint, schema);
}

exports.FeedbackSprint = FeedbackSprint; 
exports.validate = validateFeedbackSprint;