import * as React from 'react';

import { Formik, Form, Field } from 'formik';
import * as yup from "yup"
import Dialog from '../connected/Dialog';
import { constants } from './common';
import InputField from '../connected/form/InputField';

const LoginValidation = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(8)
      .max(16)
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$/)
      .required(),
})

export default function () {
    return (
        <Dialog 
            name={ constants.loginModal }
            title="Log in"
            modifier="dialog--auth"
        >
            <div className="auth-modal">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={LoginValidation}
                    onSubmit={values => {
                        // todo
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="auth-modal__form">
                            <InputField
                                classname="auth-modal"
                                name="email" 
                                type="email"
                                label="Email"
                                errors={errors.email}
                                touched={touched.email}
                            />

                            <InputField
                                classname="auth-modal"
                                name="password" 
                                type="password"
                                label="Password"
                                errors={errors.password}
                                touched={touched.password}
                            />
                            <button 
                                className="auth-modal__submit"
                                type="submit">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className="auth-modal__footer">
                    <a 
                        href="#"
                        className="auth-modal__registration">
                        Реєстрація
                    </a>
                </div>
            </div>
        </Dialog>
    );
}
