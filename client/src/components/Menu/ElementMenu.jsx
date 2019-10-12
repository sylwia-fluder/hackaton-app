import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.scss';

const ElementMenu = (props) => {
    const {
        children,
        handleClick,
        icon,
        link,
    } = props;

    if (link) return (
        <Link className={styles.nav_link} to={link}>
            <p className={styles.nav_link_text}>{children}</p>
            <FontAwesomeIcon size='1x' icon={icon}/>
        </Link>
    );

    return (
        <div className={styles.nav_link} onClick={handleClick}>
            <p className={styles.nav_link_text}>{children}</p>
            <FontAwesomeIcon size='1x' icon={icon}/>
        </div>
    );
};

ElementMenu.propTypes = {
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func,
    icon: PropTypes.object.isRequired,
    link: PropTypes.string,
};

export default ElementMenu;
