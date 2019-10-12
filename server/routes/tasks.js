const express = require("express");
const router = express.Router();
const { Task, validate } = require("../models/Task");
const { Sprint } = require("../models/Sprint");
const { User } = require("../models/User");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const sprint = await Sprint.findById(req.body.sprintId);
  if (!sprint) return res.status(404).send("The sprint with given ID is not found!");

  const user = await User.findById(req.body.taskerId);
  if (!user) return res.status(404).send("User with given ID not found.");

  const task = new Task({
    title: req.body.title,
    sprint: {
      _id: sprint._id,
      number: sprint.number
    },
    tasker: {
      _id: user._id,
      name: user.name
    }
  });

  const taskSaved = await task.save();

  res.send(taskSaved);
});

router.put("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).send("The task with given ID is not found!");

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, { done: true });

  res.send(updatedTask);
});

module.exports = router;
