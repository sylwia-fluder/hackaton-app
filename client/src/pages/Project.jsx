import React from 'react';
import Main from '../components/UsersList/UserList';
import Sprint from '../components/Sprint';
import Feedback from '../components/Feedback';
import styles from '../styles/Project.module.scss';


const Project = () => {
    const userList= [{name:'Adrian',name:'Podkalicki',done:true},{username:'MArcin',name:'Kowalski',done:false}]
    return (
<<<<<<< HEAD
        <div className={styles.main_box}>
            <Feedback />
=======
        <div>
            Single Project
             <Main usersList = {userList}/>
>>>>>>> b6df4ff6017647715b2f335657753eedc4ae6ed4
            <Sprint />

        </div>
    );
};

export default Project;