import * as React from 'react';
import { TextField } from '@material-ui/core';

type PropsType = {
    classname: string,
    name: string,
    label?: string,
    type?: string,
    multiline?: boolean,
    formik: any,
}

export default function (props: PropsType) {
    const formik = props.formik;
    window.console.log('formic', formik)
    return (
        <label className={`${props.classname}__field ${
            formik.errors[props.name] && formik.touched[props.name] 
                ? `${props.classname}__field--error`
                : ''
        }`}>
            <TextField 
                name={ props.name } 
                type={ props.type }
                className={`${props.classname}__input`}
                label={ props.label }
                multiline={ props.multiline }
                value={formik.values[props.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[props.name] && Boolean(formik.errors[props.name])}
                helperText={formik.touched[props.name] && formik.errors[props.name]}
                variant="outlined" />
        </label>
    );
}