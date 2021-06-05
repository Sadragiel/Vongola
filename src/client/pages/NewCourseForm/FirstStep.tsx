import * as React from 'react';
import { Formik, Form, useFormik, FormikProvider, Field } from 'formik';
import * as yup from "yup"
import InputField from '../../components/connected/form/InputField';
import { Button } from '@material-ui/core';

const LoginValidation = yup.object().shape({
    title: yup
      .string()
      .required(),
    shortdesc: yup
      .string()
      .required(),
    desc: yup
      .string()
      .required(),
   

})

type PropsType = {
    cb: (values: any) => void
};

export default function (props: PropsType) {
    const formik = useFormik({
        initialValues: {
            title: '',
            shortdesc: '',
            desc: '',
        },
        validationSchema: LoginValidation,
        onSubmit: values => {
            props.cb(values);
        }
    })

    return (
        <div className="new-course-first-step">
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} className="new-course-first-step__form">
                    <InputField
                        classname="new-course-first-step"
                        name="title"
                        type="text"
                        label="Title"
                        formik={formik}
                    />
                    
                    <InputField
                        classname="new-course-first-step"
                        name="shortdesc"
                        multiline
                        label="Short Description"
                        formik={formik}
                    />

                    <InputField
                        classname="new-course-first-step"
                        name="desc"
                        multiline
                        label="Description"
                        formik={formik}
                    />
                        

                    <Button  
                        variant="contained"
                        color="primary"
                        className="new-course-first-step__submit"
                        type="submit">
                        Submit
                    </Button >
                </form>
            </FormikProvider>
        </div>
    );
}
