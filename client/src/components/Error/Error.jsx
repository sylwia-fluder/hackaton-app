import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Error.module.scss';

const Error = ({ center = false, children }) => {
    const errorStyles = classNames({
        [styles.error]: true,
        [styles.error__center]: center,
    });

    return (
        <div className={errorStyles}>
            {children}
        </div>
    );
};

Error.propTypes = {
    center: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Error;