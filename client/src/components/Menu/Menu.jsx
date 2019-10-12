import React from 'react';
import { Link } from "react-router-dom";
import "./menu.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return(
        <nav className='navbar'>
            <Link className='nav-link'>
                <p className='nav-link-text'>HOME</p>
                <FontAwesomeIcon size='1x' icon={faHome}/>
            </Link>
            <Link className='nav-link'>
                <p className='nav-link-text'>USER</p>
                <FontAwesomeIcon size='1x' icon={faUser}/>
            </Link>
            <Link className='nav-link'>
                <p className='nav-link-text'>LOGOUT</p>
                <FontAwesomeIcon size='1x' icon={faSignOutAlt}/>
            </Link>
        </nav>
    );
};

export default Menu;
