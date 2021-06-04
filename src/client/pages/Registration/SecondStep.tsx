import * as React from 'react';
import { Formik, Form } from 'formik';
import * as yup from "yup"
import InputField from '../../components/connected/form/InputField';

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
    return (
        <div className="registration-second-step">
            <Formik
                    initialValues={{
                        fullname: '',
                        bio: '',
                        age: '',
                        ava: null,
                    }}
                    validationSchema={LoginValidation}
                    onSubmit={values => {
                        // todo
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="registration-second-step__form">
                            <InputField
                                classname="registration-second-step"
                                name="fullname" 
                                type="text"
                                label="Fullname"
                                errors={errors.fullname}
                                touched={touched.fullname}
                            />
                            <InputField
                                classname="registration-second-step"
                                name="bio" 
                                type="text"
                                label="Bio"
                                errors={errors.bio}
                                touched={touched.bio}
                            />

                            <InputField
                                classname="registration-second-step"
                                name="age" 
                                type="number"
                                label="Age"
                                errors={errors.age}
                                touched={touched.age}
                            />

                            <InputField
                                classname="registration-second-step"
                                name="ava" 
                                type="file"
                                label="Choose profile pic (anime or pony (r34) preferable)"
                                errors={errors.ava}
                                touched={touched.ava}
                            />

                            <button 
                                className="registration-second-step__submit"
                                type="submit">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
        </div>
    );
}
