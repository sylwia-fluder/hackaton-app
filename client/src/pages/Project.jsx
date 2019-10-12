import React from 'react';
import Main from '../components/UsersList/UserList';
import Sprint from '../components/Sprint';

const Project = () => {
    const userList = [
        {
            username: 'Adrian',
            name: 'Podkalicki',
            done: true
        },
        {
            username: 'Marcin',
            name: 'Kowalski',
            done: false
        }];

    return (
        <div>
            Single Project
            <Main usersList={userList}/>
            <Sprint/>
        </div>
    );
};

export default Project;