import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Loading.module.scss';

const Loading = ({ fixed = false }) => {
    const loadingStyles = classNames({
        [styles.loading]: true,
        [styles.loading__fixed]: fixed,
    });

    return (
        <FontAwesomeIcon spin
                         size='4x'
                         className={loadingStyles}
                         icon={faSpinner}/>
    );
};

Loading.propTypes = {
    fixed: PropTypes.bool,
};

export default Loading;