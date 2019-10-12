const express = require('express');
const router = express.Router();
const {FeedbackSprint, validate} = require('../models/FeedbackSprint');
const {User} = require('../models/User');
const {Sprint} = require('../models/Sprint');

router.get('findFeedbackByUser/:userId', async (req, res) => {
    const feedback = await FeedbackSprint.find({'giver._id': req.params.userId}).sort('date');
    res.send(feedback);
  });

router.post('/', async (req, res) => {
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const giverFound = await User.findById(req.body.giverId);
  if (!giverFound) return res.status(404).send('The user with given ID is not found!');

  const takerFound = await User.findById(req.body.takerId);
  if (!takerFound) return res.status(404).send('The user with given ID is not found!');

  const sprintFound = await Sprint.findById(req.body.sprintId);
  if (!sprintFound) return res.status(404).send('The spint with given ID is not found!');


  const feedback = new FeedbackSprint({
    giver: {
      _id: giverFound._id,
      name: giverFound.name,
    },
    taker: {
        _id: takerFound._id,
        name: takerFound.name,
    },
    sprint: {
        _id: sprintFound._id,
        number: sprintFound.number,
    },
    date: new Date(),
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3,
    answer4: req.body.answer4,
    answer5: req.body.answer5,
    answer6: req.body.answer6,
    answer7: req.body.answer7,
    answer8: req.body.answer8,
    answer9: req.body.answer9,
  });
  
  const feedbackSaved = await feedback.save();

  res.send(feedbackSaved);
});


  module.exports = router; 