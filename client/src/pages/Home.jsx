import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import Landing from '../components/Landing';
import { ROUTES, STORAGE_NAMES } from '../constants';
import { get } from 'lodash';

const Home = (props) => {
    const sessionStorageUser = sessionStorage.getItem(STORAGE_NAMES.USER);
    const inLogin = sessionStorageUser !== 'undefined' && sessionStorageUser !== null && !!sessionStorageUser;

    const referer = get(props.location, 'state.referer.pathname', ROUTES.MAIN);

    if (inLogin) return <Redirect to={referer}/>;
    
    return (
        <Landing>
            Have you ever wondered what your colleagues think about you? Furthermore, would you like to tell someone how
            you feel about their work and what they could improve on without risking being rude? You're in the right
            place! Welcome to our app, where you are able to anonymously make your teammates less annoying and make the
            job easier!
        </Landing>
    );
};

Home.propTypes = {
    location: PropTypes.object,
};

export default withRouter(Home);