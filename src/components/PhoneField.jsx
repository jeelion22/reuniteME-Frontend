import React from "react";
import { Field, ErrorMessage } from "formik";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";

const PhoneField = ({ field, form, ...props }) => {
  return (
    <div>
      <PhoneInput
        {...field}
        {...props}
        value={field.value}
        onChange={(value) => form.setFieldValue(field.name, value)}
      />
      <ErrorMessage name={field.name} component="div" className="text-danger" />
    </div>
  );
};

export default PhoneField;
