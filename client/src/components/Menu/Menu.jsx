import React, { Fragment } from 'react';
import { faHome, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context';
import styles from './Menu.module.scss';
import ElementMenu from './ElementMenu';
import Login from '../Login';
import { goToUserProfile } from '../../helpers';
import{goToMain}  from '../../helpers';
const Menu = () => {
    const {authTokens, setAuthTokens} = useAuth();

    const logOut = () => setAuthTokens();
    return (
        <nav className={styles.navbar}>
            {authTokens ?
                <Fragment>
                    <ElementMenu icon={faHome} link={goToMain()}>HOME</ElementMenu>
                    <ElementMenu icon={faUser} link={goToUserProfile()}>USER</ElementMenu>
                    <ElementMenu icon={faSignOutAlt} handleClick={logOut}>LOGOUT</ElementMenu>
                </Fragment> :
                <Login/>
            }
        </nav>
    );
};

export default Menu;
