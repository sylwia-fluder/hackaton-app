import React from 'react';
import Main from '../components/UsersList/UserList';
import Sprint from '../components/Sprint';
import Feedback from '../components/Feedback';
import styles from '../styles/Project.module.scss';


const Project = () => {
    const userList= [{name:'Adrian',name:'Podkalicki',done:true},{username:'MArcin',name:'Kowalski',done:false}]
    return (
        <div className={styles.main_box}>
            <Feedback />
            <Sprint />
            <Main usersList = {userList}/>

        </div>
    );
};

export default Project;