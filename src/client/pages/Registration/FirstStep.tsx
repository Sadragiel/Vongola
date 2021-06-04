import * as React from 'react';
import { Formik, Form } from 'formik';
import * as yup from "yup"
import InputField from '../../components/connected/form/InputField';

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
    return (
        <div className="registration-first-step">
            <Formik
                    initialValues={{
                        email: '',
                        email_repeat: '',
                        password: '',
                        password_repeat: '',
                    }}
                    validationSchema={LoginValidation}
                    onSubmit={values => {
                        props.cb(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="registration-first-step__form">
                            <InputField
                                classname="registration-first-step"
                                name="email" 
                                type="email"
                                label="Email"
                                errors={errors.email}
                                touched={touched.email}
                            />
                            <InputField
                                classname="registration-first-step"
                                name="email_repeat" 
                                type="email"
                                label="Repeat email"
                                errors={errors.email_repeat}
                                touched={touched.email_repeat}
                            />

                            <InputField
                                classname="registration-first-step"
                                name="password" 
                                type="password"
                                label="Password"
                                errors={errors.password}
                                touched={touched.password}
                            />

                            <InputField
                                classname="registration-first-step"
                                name="password_repeat" 
                                type="password"
                                label="Password"
                                errors={errors.password_repeat}
                                touched={touched.password_repeat}
                            />

                            <button 
                                className="registration-first-step__submit"
                                type="submit">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
        </div>
    );
}
