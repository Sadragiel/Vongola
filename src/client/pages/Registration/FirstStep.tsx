import * as React from 'react';
import { Formik, Form, useFormik, FormikProvider } from 'formik';
import * as yup from "yup"
import InputField from '../../components/connected/form/InputField';
import { Button } from '@material-ui/core';

const LoginValidation = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    email_repeat: yup
        .string()
        .test(
            'equal',
            'Emails do not match!',
            function(v) { 
                const ref = yup.ref('email');
                return v === this.resolve(ref);
            }
        ),
    password: yup
        .string()
        .min(8)
        .max(16)
        .required(),
    password_repeat: yup
        .string()
        .test(
            'equal',
            'Password do not match!',
            function(v) { 
                const ref = yup.ref('password');
                return v === this.resolve(ref);
            }
        ),

})

type PropsType = {
    cb: (values: any) => void
};

export default function (props: PropsType) {
    const formik = useFormik({
        initialValues: {
            email: '',
            email_repeat: '',
            password: '',
            password_repeat: '',
        },
        validationSchema: LoginValidation,
        onSubmit: values => {
            props.cb(values);
        }
    })

    return (
        <div className="registration-first-step">
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} className="registration-first-step__form">
                    <InputField
                        classname="registration-first-step"
                        name="email" 
                        type="email"
                        label="Email"
                        formik={formik}
                    />
                    <InputField
                        classname="registration-first-step"
                        name="email_repeat" 
                        type="email"
                        label="Repeat email"
                        formik={formik}
                    />

                    <InputField
                        classname="registration-first-step"
                        name="password" 
                        type="password"
                        label="Password"
                        formik={formik}
                    />

                    <InputField
                        classname="registration-first-step"
                        name="password_repeat" 
                        type="password"
                        label="Password"
                        formik={formik}
                    />

                    <Button  
                        variant="contained"
                        color="primary"
                        className="registration-first-step__submit"
                        type="submit">
                        Submit
                    </Button >
                </form>
            </FormikProvider>
        </div>
    );
}
