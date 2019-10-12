const {User} = require('../models/User'); 

async function addProjectToUser(userId, project){
    const user = await User.findByIdAndUpdate(
     userId, {
        $push: { projects: {
          '_id': project._id,
          'title': project.title
        }}},
      { new: true }
    );
      
    return user;
}

async function addProjectToManager(userId, project){
    const user = await User.findByIdAndUpdate(
     userId, {
        $push: { 
            projectsAsManager: {
                '_id': project._id,
                'title': project.title
            }
        }
    },
      { new: true }
    );
      
    return user;
}

exports.addProjectToManager = addProjectToManager;
exports.addProjectToUser = addProjectToUser;
  