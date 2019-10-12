import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.module.scss';

const Landing = ({ children }) => {
    return (
        <Fragment>
            <div className={styles.container}/>
            <div className={styles.text}>
                {children}
            </div>
        </Fragment>
    )
};

Landing.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Landing;