const express = require('express');
const router = express.Router();
const {Sprint, validate} = require('../models/Sprint');
const {Project} = require('../models/Project');
const {User} = require('../models/User');

router.get('/browserProject/:ProjectId', async (req, res) => {
    const sprint = await Sprint.find({'project._id': req.params.ProjectId});
    res.send(sprint);
  });

router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    
    if (error) return res.status(400).send(error.details[0].message);

    const membersList = await Promise.all(req.body.members.map(async member => {
        const memberFindInCollection = await User.findById(member.memberId);
        if (!memberFindInCollection) return res.status(404).send('The member with given ID is not found!');

        return {
            name: memberFindInCollection.name,
            _id: memberFindInCollection._id
        }
    }));

    const project = await Project.findById(req.body.projectId);
    if (!project) return res.status(404).send('The project with given ID is not found!');


    const sprint = new Sprint({
      members: membersList,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      project: {
          title: project.title,
          _id: project._id
      }
    });
    const sprintSaved= await sprint.save();
  
    res.send(sprintSaved);
  });


  module.exports = router; 