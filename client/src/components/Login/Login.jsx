import React, { useState, useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import * as yup from 'yup';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';
import Loading from '../Loading';
import Error from '../Error';
import Input from '../Input';
import Button from '../Button';
import ElementMenu from '../Menu/ElementMenu';
import ContainerButtons from '../ContainerButtons';
import { useToggle } from '../../hooks';
import { useAuth } from '../../context';
import { ROUTES, ENDPOINTS, HEADER_TOKEN } from '../../constants';
import { headers } from '../../helpers';
import history from '../../history';
import styles from './Login.module.scss';

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

    useEffect(() => {
        if (!showModal) setShowError(false);
    }, [showModal]);

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
                response.json()
                    .then(data => {
                        setAuthTokens({
                            _token: response.headers.get(HEADER_TOKEN),
                            _id: data.userId,
                        });
                        history.push(referer);
                    })
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
                            <div className={styles.container}>
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
                                {showError && <Error center={true}>Something went wrong...</Error>}
                                <ContainerButtons>
                                    <Button color='red' handleClick={setShowModal}>
                                        Cancel
                                    </Button>
                                    <Button type='submit' color='green'>
                                        Login
                                    </Button>
                                </ContainerButtons>
                            </div>
                        </Form>
                    </Formik>
                </Modal>
            )}
        </div>
    );
};

export default withRouter(Login);