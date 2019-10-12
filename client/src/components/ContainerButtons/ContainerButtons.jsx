import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContainerButtons.module.scss';

const ContainerButtons = ({ children }) => {
    return (
        <div className={styles.container__buttons}>
            {children}
        </div>
    )
};

ContainerButtons.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContainerButtons;