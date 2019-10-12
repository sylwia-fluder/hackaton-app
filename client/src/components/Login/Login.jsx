import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import * as yup from 'yup';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';
import Loading from '../Loading';
import Error from '../Error';
import Input from '../Input';
import ElementMenu from '../Menu/ElementMenu';
import { useToggle } from '../../hooks';
import { useAuth } from '../../context';
import { ROUTES, ENDPOINTS, HEADER_TOKEN } from '../../constants';
import { headers } from '../../helpers';
import history from '../../history';

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
    const {setAuthTokens} = useAuth();

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
                history.push(referer);
            }
        }).catch(() => {
            setShowLoader(false);
            setShowError(true);
        });
    };

    return (
        <div>
            <ElementMenu icon={faUser} handleClick={setShowModal}>LOGIN</ElementMenu>
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

export default withRouter(Login);