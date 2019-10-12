import React from 'react';
import Main from '../components/UsersList/UserList';

const Project = () => {
    const userList= [{name:'Adrian',name:'Podkalicki',done:true},{username:'MArcin',name:'Kowalski',done:false}]
    return (
        <div>
            Single Project
             <Main usersList = {userList}/>
        </div>
    );
};

export default Project;