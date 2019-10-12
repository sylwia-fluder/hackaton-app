import React from 'react';
import classNames from 'classnames';
import styles from './Sprint.module.scss';
import SprintDetails from '../SprintDetails';

const Sprint = (props) => {
    return(
        <div className={styles.border}>
            <div className={styles.container}>
                <div className={styles.sprint_name}>Sprint name</div>
                    <SprintDetails />
                    <SprintDetails />
            </div>
        </div>
    );
};

export default Sprint;

