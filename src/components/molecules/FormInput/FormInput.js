import React, { Fragment } from "react";
import PropTypes from "prop-types";

export const FormInput = ({
  id,
  inputClass,
  label,
  labelClass,
  placeholder,
  type,
}) => {
  if (type === "textarea") {
    return (
      <Fragment>
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <textarea
          id={id}
          name={id}
          className={inputClass}
          placeholder={placeholder}
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={inputClass}
        placeholder={placeholder}
      />
    </Fragment>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelClass: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

FormInput.defaultProps = {
  inputClass: "",
  labelClass: "",
  placeholder: "",
  type: "text",
};
