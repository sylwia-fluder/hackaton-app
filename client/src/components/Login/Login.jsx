import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { get } from 'lodash';
import * as yup from 'yup';
import Modal from '../Modal';
import Loading from '../Loading';
import Error from '../Error';
import Input from '../Input';
import { useToggle } from '../../hooks';
import { useAuth } from '../../context';
import { ROUTES, ENDPOINTS, HEADER_TOKEN } from '../../constants';
import { headers } from '../../helpers';

const LoginModel = {
    email: '',
    password: '',
};

const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .min(5)
        .max(255)
        .required(),
    password: yup
        .string()
        .min(5)
        .max(255)
        .required(),
});

const Login = (props) => {
    const {authTokens, setAuthTokens} = useAuth();

    const [isLoggedIn, setLoggedIn] = useState(authTokens);
    const [showModal, setShowModal] = useToggle(false);
    const [showLoader, setShowLoader] = useState(false);
    const [showError, setShowError] = useState(false);

    const referer = get(props.location, 'state.referer.pathname', ROUTES.MAIN);

    const postLogin = (values) => {
        setShowLoader(true);
        setShowError(false);

        fetch(
            ENDPOINTS.LOGIN,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
                headers: headers(),
            }
        ).then(response => {
            if (!response.ok) {
                throw new Error('Not 200 response');
            } else {
                setAuthTokens(response.headers.get(HEADER_TOKEN));
                setLoggedIn(true);
            }
        }).catch(() => {
            setShowLoader(false);
            setShowError(true);
        });
    };

    if (isLoggedIn) return <Redirect to={referer}/>;

    return (
        <div>
            <button onClick={setShowModal}>Login</button>
            {showModal && (
                <Modal open={showModal} toggle={setShowModal}>
                    <Formik
                        initialValues={LoginModel}
                        validationSchema={LoginSchema}
                        onSubmit={values => postLogin(values)}
                    >
                        <Form>
                            {showLoader && <Loading fixed/>}
                            <Field type='text'
                                   name='email'
                                   placeholder='Email'
                                   center={true}
                                   component={Input}/>
                            <ErrorMessage name='email'
                                          center={true}
                                          component={Error}/>
                            <Field type='password'
                                   name='password'
                                   placeholder='Password'
                                   center={true}
                                   component={Input}/>
                            <ErrorMessage name='password'
                                          center={true}
                                          component={Error}/>
                            <button type='submit'>
                                Login
                            </button>
                            {showError && <Error>Something went wrong...</Error>}
                        </Form>
                    </Formik>
                </Modal>
            )}
        </div>
    );
};

export default Login;