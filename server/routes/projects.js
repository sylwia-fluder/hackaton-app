const pick = require("lodash");
const express = require("express");
const router = express.Router();
const {Project, validate} = require('../models/Project');
const {User} = require('../models/User');
const {addProjectToUser, addProjectToManager} = require('../controllers/user');

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

  const projectManagerUser = await User.findById(req.body.projectManagerId);
  if (!projectManagerUser) return res.status(404).send('The user with given ID is not found!');

  const project = new Project({
    projectManager: {
      _id: projectManagerUser._id,
      name: projectManagerUser.name,
    },
    title: req.body.title,
    members: membersList,
    createdDate: new Date().getTime(),
  });

  
  const projectSaved = await project.save();
  
  req.body.members.forEach(member => {
    addProjectToUser(member.memberId, projectSaved);
  });

  addProjectToManager(req.body.projectManagerId, projectSaved);
  
  res.send(projectSaved);
});


module.exports = router;
