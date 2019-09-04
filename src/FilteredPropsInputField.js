import React from "react";
import { Field } from "formik";

// This will remove any non-standard html props from the field
// valid=true or error=true will not be rendered on the final dom node
function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

export default FilteredPropsInputField;
