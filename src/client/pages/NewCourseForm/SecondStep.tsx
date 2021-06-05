import * as React from 'react';
import { Formik, Form, useFormik, FormikProvider, Field } from 'formik';
import * as yup from "yup"
import InputField from '../../components/connected/form/InputField';
import { Button } from '@material-ui/core';
import DatePickerField from '../../components/connected/DatePickerField';

const LoginValidation = yup.object().shape({
    usernumber: yup
        .number()
        .required(),
})

type PropsType = {
    cb: (values: any[]) => void
};

const tags = [
    'programming',
    'biology',
    'math',
]

export default function (props: PropsType) {
    const formik = useFormik({
        initialValues: {
            usernumber: '',
        },
        validationSchema: LoginValidation,
        onSubmit: () => {
            // todo
        }
    });
    
    return (
        <div className="new-course-second-step">
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} className="new-course-second-step__form">
                    <div className="new-course-second-step__filter-title" id="checkbox-group">Tags</div>
                    <div 
                        className="new-course-second-step__filter-group" 
                        role="group" 
                        aria-labelledby="checkbox-group"
                    >
                        {
                            tags.map(el => (
                                <label className="new-course-second-step__filter-item">
                                    <Field 
                                        type="checkbox" 
                                        name="tags" 
                                        value={el} 
                                        className="new-course-second-step__check-box" 
                                    />
                                    {el}
                                </label>
                            ))
                        }
                    </div>

                    <InputField
                        classname="new-course-second-step"
                        name="usernumber" 
                        type="number"
                        label="Max users number"
                        formik={formik}
                    />
                    
                    <DatePickerField 
                        classname="new-course-second-step"
                        label="Date of start:"
                        formik={formik} 
                        name="date" />

                    <Button     
                        variant="contained"
                        color="primary"
                        className="new-course-second-step__submit"
                        type="submit">
                        Submit
                    </Button>
                </form>
            </FormikProvider>
        </div>
    );
}
