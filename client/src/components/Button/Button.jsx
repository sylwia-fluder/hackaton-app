import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Input = ({ children }) => {
    const buttonStyles = classNames({
        [styles.button]: true,
    });

    return (
        <button className={buttonStyles}>
            {children}
        </button>
    )
};

Input.propTypes = {
    center: PropTypes.bool,
    field: PropTypes.object,
    form: PropTypes.object,
};

export default Input;