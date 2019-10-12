import React, { useState } from 'react';
import * as yup from 'yup';
import Loading from '../components/Loading';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Input from '../components/Input';
import Error from '../components/Error';
import Button from '../components/Button';
import { getUserId, headersWithToken } from '../helpers';
import { ENDPOINTS } from '../constants';

const ChangePasswordModel = {
    password: '',
    passwordConfirm: '',
};

const ChangePasswordSchema = yup.object().shape({
    password: yup
        .string()
        .min(5)
        .max(255)
        .required(),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], 'passwords must match')
        .required('password confirm is required'),
});

const UserProfile = () => {
    const [showLoader, setShowLoader] = useState(false);
    const [showError, setShowError] = useState(false);

    const changePassword = (values) => {
        setShowLoader(true);
        setShowError(false);

        fetch(
            `${ENDPOINTS.CHANGE_PASSWORD}${getUserId()}`,
            {
                method: 'PUT',
                body: JSON.stringify({
                    password: values.password,
                }),
                headers: headersWithToken(),
            }
        ).then(response => {
            if (!response.ok) {
                throw new Error('Not 200 response');
            } else {

            }
        }).catch(() => {
            setShowLoader(false);
            setShowError(true);
        });
    };

    const styles = {display: 'table', margin: '100px auto 0',};
    
    return (
        <div>
            <Formik
                initialValues={ChangePasswordModel}
                validationSchema={ChangePasswordSchema}
                onSubmit={values => changePassword(values)}
            >
                <Form>
                    <div style={styles}>
                        {showLoader && <Loading fixed/>}
                        <Field component={Input}
                               type='password'
                               name='password'
                               placeholder='Password'
                               custom='center'/>
                        <ErrorMessage component={Error}
                                      name='password'/>
                        <Field component={Input}
                               type='password'
                               name='passwordConfirm'
                               placeholder='Password Confirm'/>
                        <ErrorMessage component={Error}
                                      name='passwordConfirm'/>
                        {showError && <Error center={true}>Something went wrong...</Error>}
                        <Button type='submit'
                                color='green'>
                            Change Password
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default UserProfile;