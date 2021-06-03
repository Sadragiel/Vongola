import * as React from 'react';
import { Field } from 'formik';

type PropsType = {
    classname: string,
    name: string,
    label?: string,
    errors?: string,
    touched?: boolean,
    type?: string,
}

export default function (props: PropsType) {
    return (
        <label className={`${props.classname}__field ${
            props.errors && props.touched 
                ? `${props.classname}__field--error`
                : ''
        }`}>
            <span className={`${props.classname}__label`}>
                { props.label }
            </span>
            <Field 
                name={ props.name } 
                type={ props.type }
                className={`${props.classname}__input`}
            />
            {props.errors && props.touched && (
                <div className={`${props.classname}__error`}>
                    { props.errors }
                </div>
            )}
        </label>
    );
}