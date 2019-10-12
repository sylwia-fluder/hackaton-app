import React from 'react';
import Sprint from '../components/Sprint';
import Feedback from '../components/Feedback';
import styles from '../styles/Project.module.scss';


const Project = () => {
    return (
        <div className={styles.main_box}>
            <Feedback />
            <Sprint />

        </div>
    );
};

export default Project;