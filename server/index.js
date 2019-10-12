const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const feedbackPersonal = require('./routes/feedbackPersonals');
const feedbackSprint = require('./routes/feedbackSprints');
const users = require("./routes/users");
const auth = require("./auth/auth");
const project = require("./routes/projects");
const sprint = require("./routes/sprints");
const task = require("./routes/tasks");
const User = require("./models/User").User

dotenv.config({ path: "./config/.env.local" });

app.use(
  cors({
    exposedHeaders: ["x-auth-token"]
  })
);
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/project', project);
app.use('/api/sprint', sprint);
app.use('/api/feedbackPersonal', feedbackPersonal);
app.use('/api/feedbackSprint', feedbackSprint);
app.use('/api/task', task);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {console.log("Connected to DB")}
  )
  .catch(err => console.error(err));
/*mongoose.connect('mongodb://localhost/hackatonNew')
  .then(() => console.log('Connect to DB'))
  .catch(err => console.error(err));*/


async function main (){
  const us =await User.findOne({ _id:"5da140429ef72b2c0eee8027" })
  console.log(us)
}
main()

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
