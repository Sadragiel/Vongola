import * as React from 'react';

import { Formik, Form, useFormik, FormikProvider } from 'formik';
import * as yup from "yup"
import Dialog from '../connected/Dialog';
import { constants } from './common';
import InputField from '../connected/form/InputField';
import { Button } from '@material-ui/core';

const LoginValidation = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(8)
      .max(16)
      .required(),
})

export default function () {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginValidation,
        onSubmit: () => {
            // todo
        }
    })

    return (
        <Dialog 
            name={ constants.loginModal }
            title="Log in"
            modifier="dialog--auth"
        >
            <div className="auth-modal">
                <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit} className="auth-modal__form">
                        <InputField
                            classname="auth-modal"
                            name="email" 
                            type="email"
                            label="Email"
                            formik={formik}
                        />

                        <InputField
                            classname="auth-modal"
                            name="password" 
                            type="password"
                            label="Password"
                            formik={formik}
                        />
                        <Button 
                            variant="contained"
                            color="primary"
                            className="auth-modal__submit"
                            type="submit">
                            Submit
                        </Button>
                    </form>
                    <div className="auth-modal__footer">
                        <a 
                            href="/registration"
                            className="auth-modal__registration">
                            Реєстрація
                        </a>
                    </div>
                </FormikProvider>
            </div>
        </Dialog>
    );
}
