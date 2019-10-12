import React from 'react';
import classNames from 'classnames';
import styles from './SprintDetails.module.scss';
import shortid from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

const SprintDetails = (props) => {

    const componentStatus = false;

    const tasks = [
        {name: 'Task 1', status: true},
        {name: 'Task 2', status: true},
        {name: 'Task 3', status: false},
        
    ];

    //props.tasks.filtes ...
    //return props.tasks.status === true;
    const calculateStatus = () => {
        const checked = tasks.filter((task) => {
            return task.status === true;
        });
        const status = Math.floor(checked.length / tasks.length * 100);   
        return status;     
    }

    const setStatus = () => {
        const procent = calculateStatus(); 
        return (
            <div className={(procent >= 50) ? classNames(styles.tasks_status, styles.circle_green) 
                : classNames(styles.tasks_status, styles.circle_red)}>
                <div className={styles.second_circle}>
                    {procent}%
                </div>
            </div>
        );
    };
    
//props.tasks.map(task => {return ..})
    const items = tasks.map(task => {

        return(
            <li key={shortid.generate()} className={styles.list_item}>
                <p className={styles.task_text}>{task.name}</p> 
                {(task.status === true) ?  
                    <FontAwesomeIcon icon={faCheck} className={classNames(styles.task_img, styles.green)}/> : 
                    <FontAwesomeIcon icon={faTimes} className={classNames(styles.task_img, styles.red)}/>} 
            </li>
        );
    });

    //FontAwesomeIcon
    // {(props.status == true) ?  
    //     <FontAwesomeIcon icon={faCheck} className={classNames(styles.feedback_status, styles.green)}/> : 
    //     <FontAwesomeIcon icon={faPlusCircle} className={classNames(styles.feedback_status, styles.yellow)}/>} 
    return(
        <div className={styles.content}>
            <p className={styles.user}>User name</p>
            {(componentStatus === true) ?  
                <FontAwesomeIcon icon={faCheck} className={classNames(styles.feedback_status, styles.green)}/> : 
                <FontAwesomeIcon icon={faPlusCircle} className={classNames(styles.feedback_status, styles.yellow)}/>} 
            <ul className={styles.tasks}>
                {items}
            </ul>
            <div>
                {setStatus()}
            </div>
        </div>
    );
};

export default SprintDetails;

