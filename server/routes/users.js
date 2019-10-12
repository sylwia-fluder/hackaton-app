const bcryptjs = require('bcryptjs');
const _ = require('lodash');
const {User, validate} = require('../models/User');
const {Sprint} = require('../models/Sprint');
const {Project} = require('../models/Project');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.get('/user', async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

router.get('/', async (req, res) => {
  const user = await User.find();
  res.send(user);
});

router.get('/getProjects/:userId', async (req, res) => {
  const usersProjects = await User.findById(req.params.userId).select('-password');

  const projects =await Promise.all(usersProjects.projects.map(async proj => {

    const sprint = await Sprint.find({ "project._id": proj._id });

    const projectDate = await Project.findById(proj._id);
    console.log(proj);

    return {
      "sprintNumber" : sprint.number,
      "projectManager": projectDate.projectManager.name,
      "projectTitle": proj.title
    }
  }));
  res.send(projects);
});

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.send(user);
});

router.put('/:userId', auth, async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.userId,
    _(req.body, ['password']),
    { new: true }
  ).select("-password");
  if (!user) return res.status(404).send('The user with given ID is not found!');
  res.send(user);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');

    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
  
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
    
  } catch(error) {
    return res.status(500).send('Something failed.');
  }
});


module.exports = router; 