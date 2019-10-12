import React, {Fragment} from 'react';
import {faHome, faUser, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {useAuth} from '../../context';
import styles from './Menu.module.scss';
import ElementMenu from './ElementMenu';
import Login from '../Login';

const Menu = () => {
    const {authTokens, setAuthTokens} = useAuth();

    const logOut = () => setAuthTokens();

    return (
        <nav className={styles.navbar}>
            {authTokens ?
                <Fragment>
                    <ElementMenu icon={faHome} link={''}>HOME</ElementMenu>
                    <ElementMenu icon={faUser} link={''}>USER</ElementMenu>
                    <ElementMenu icon={faSignOutAlt} handleClick={logOut}>LOGOUT</ElementMenu>
                </Fragment> :
                <Login/>
            }
        </nav>
    );
};

export default Menu;
