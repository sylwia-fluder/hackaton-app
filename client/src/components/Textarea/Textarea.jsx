import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Textarea.module.scss';

const Textarea = ({ size, field, form, ...rest }) => {
    const textareaStyles = classNames({
        [styles.textarea]: true,
        [styles[`textarea__${size}`]]: size,
        [styles.textarea__error]: form.errors[field.name] && form.touched[field.name],
    });

    return (
        <textarea className={textareaStyles} {...field} {...rest}/>
    )
};

Textarea.propTypes = {
    field: PropTypes.object,
    form: PropTypes.object,
    size: PropTypes.oneOf([
        'large', 'small'
    ]),
};

export default Textarea;