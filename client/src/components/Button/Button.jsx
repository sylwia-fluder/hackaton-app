import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, color, handleClick, type }) => {
    const buttonStyles = classNames({
        [styles.button]: true,
        [styles[`button__${color}`]]: color,
    });

    if (type) return (
        <button type={type} className={buttonStyles}>
            {children}
        </button>
    );

    return (
        <button className={buttonStyles} onClick={handleClick}>
            {children}
        </button>
    )
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf([
        'green', 'red'
    ]).isRequired,
    handleClick: PropTypes.func,
    type: PropTypes.oneOf([
        'submit', 'reset'
    ]),
};

export default Button;