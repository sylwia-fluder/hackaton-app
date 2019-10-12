const Joi = require('joi');
const mongoose = require('mongoose');
  
const Project = mongoose.model('Project', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
    },
    members: {
        type: Array,
    },
    createdDate: {
        type: Number,
        required: true
    },
    projectManager: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minlength: 5,
                maxLength: 50
            }
        }),
        required: true,
    }
}));

function validateProject(project) {
    const schema = {
      projectManagerId: Joi.required(),
      title: Joi.string().min(5).required(),
      members: Joi.array().required(),
    };
    
    return Joi.validate(project, schema);
}

exports.Project = Project; 
exports.validate = validateProject;