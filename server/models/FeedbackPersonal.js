const Joi = require('joi');
const mongoose = require('mongoose');
  
const FeedbackPersonal = mongoose.model('FeedbackPersonal', new mongoose.Schema({
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
    date: Date,
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
    answer5: {
        type: Number,
        min: 1,
        max: 5,
    },
    answer6: String
}));

function validateFeedbackPersonal(feedbackPersonal) {
    const schema = {
      giverId: Joi.required(),
      takerId: Joi.required(),
      answer1: Joi.number(),
      answer2: Joi.number(),
      answer3: Joi.number(),
      answer4: Joi.number(),
      answer5: Joi.number(),
      answer6: Joi.string(),
    };
    
    return Joi.validate(feedbackPersonal, schema);
}

exports.FeedbackPersonal = FeedbackPersonal; 
exports.validate = validateFeedbackPersonal;