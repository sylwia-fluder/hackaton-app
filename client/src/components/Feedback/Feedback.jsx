import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './Feedback.module.scss';


const Feedback = () => {
    return (
        <div className={styles.border}>
            <div className={styles.container}>
                <div className={styles.feedback_box}>
                    <h3 className={styles.title}>FEEDBACK</h3>
                    <div className={styles.single_feedback}>
                        <p className={styles.text}>Cooperation</p>
                        <ProgressBar  className={styles.progress_bar} now={60}  />
                    </div>
                    <div className={styles.single_feedback}>
                        <p></p>
                        <p className={styles.text}>Behavior</p>
                        <ProgressBar  className={styles.progress_bar} now={70}  />
                    </div>
                    <div className={styles.single_feedback}>
                        <p className={styles.text}>Commitment</p>
                        <ProgressBar  className={styles.progress_bar} now={40}  />
                    </div>
                    <div className={styles.single_feedback}>
                        <p className={styles.text}>Future work</p>
                        <ProgressBar  className={styles.progress_bar} now={30}  />
                    </div>
                    <div className={styles.single_feedback}>
                        <p className={styles.text}>Importance</p>
                        <ProgressBar  className={styles.progress_bar} now={40}  />
                    </div>
                </div>
                <div className={styles.last_feedback_box}>
                    <h3 className={styles.title}>LAST SPRINT FEEDBACK</h3>
                    <div className={styles.single_last_feedback}>
                        <h4 className={styles.single_last_title}>SPRINT 2</h4>
                        <p>Comment</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Feedback;