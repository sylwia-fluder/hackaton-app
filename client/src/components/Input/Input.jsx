import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ center = false, field, form, ...rest }) => {
    const inputStyles = classNames({
        [styles.input]: true,
        [styles.input__center]: center,
        [styles.input__error]: form.errors[field.name] && form.touched[field.name],
    });

    return (
        <input className={inputStyles} {...field} {...rest}/>
    )
};

Input.propTypes = {
    center: PropTypes.bool,
    field: PropTypes.object,
    form: PropTypes.object,
};

export default Input;