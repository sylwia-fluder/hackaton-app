const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const users = require('./routes/users');
const auth = require('./auth/auth');
const project = require('./routes/projects');
const sprint = require('./routes/sprints');
const feedbackPersonal = require('./routes/feedbackPersonals');

dotenv.config({ path: './config/.env.local' });

app.use(
  cors({
    exposedHeaders: ['x-auth-token'],
  }),
);
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/project', project);
app.use('/api/sprint', sprint);
app.use('/api/feedbackPersonal', feedbackPersonal);
/*
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error(err));
*/
mongoose.connect('mongodb://localhost/hackatonNew')
  .then(() => console.log('Connect to DB'))
  .catch(err => console.error(err));

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
