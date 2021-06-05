import * as React from 'react';
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import './styles/index.scss';
export default function(props: any) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <div  className={`${props.classname}__datepicker`}>
        <label className={`${props.classname}__label`}>
            { props.label }
            <DatePicker
                className={`${props.classname}__datepicker-input`}
                {...field}
                {...props.formik}
                selected={(field.value && new Date(field.value)) || null}
                onChange={(val: any) => {
                    setFieldValue(field.name, val);
                }}
            />
        </label>
    </div>
  );
};