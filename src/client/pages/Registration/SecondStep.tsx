import * as React from 'react';
import { Formik, Form, useFormik, FormikProvider } from 'formik';
import * as yup from "yup"
import InputField from '../../components/connected/form/InputField';
import { Button } from '@material-ui/core';

const LoginValidation = yup.object().shape({
    fullname: yup
      .string()
      .required(),
    bio: yup
        .string()
        .required(),
    age: yup
        .number()
        .required(),
    ava: yup
        .mixed()
        .required('A file is required')

})

type PropsType = {
    cb: (values: any[]) => void
};

export default function (props: PropsType) {
    const formik = useFormik({
        initialValues: {
            fullname: '',
            bio: '',
            age: '',
            ava: null,
        },
        validationSchema: LoginValidation,
        onSubmit: () => {
            // todo
        }
    });
    
    return (
        <div className="registration-second-step">
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} className="registration-second-step__form">
                    <InputField
                        classname="registration-second-step"
                        name="fullname" 
                        type="text"
                        label="Fullname"
                        formik={formik}
                    />
                    <InputField
                        classname="registration-second-step"
                        name="bio" 
                        type="text"
                        label="Bio"
                        formik={formik}
                    />

                    <InputField
                        classname="registration-second-step"
                        name="age" 
                        type="number"
                        label="Age"
                        formik={formik}
                    />

                    <InputField
                        classname="registration-second-step__file-input registration-second-step"
                        name="ava" 
                        type="file"
                        label="Choose profile pic (anime or pony (r34) preferable)"
                        formik={formik}
                    />

                    <Button     
                        variant="contained"
                        color="primary"
                        className="registration-second-step__submit"
                        type="submit">
                        Submit
                    </Button>
                </form>
            </FormikProvider>
        </div>
    );
}
