import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = ({
  onChange,
  label,
  placeHolder = "",
  name = "",
  value = "",
  variant = "standard",
  type = "text",
  size = "small",
  margin = "normal",
  className = "",
  helperText = "",
  minRows = 4,
  multiline = false,
  required = false,
  error = false,
  disabled = false,
  readOnly = false,
  shrink = true,
  style = null,
  color = "primary",
}) => {
  return (
    <TextField
      className={className}
      label={label}
      type={type}
      placeholder={placeHolder}
      name={name}
      value={value}
      onChange={onChange}
      variant={variant}
      size={size}
      margin={margin}
      required={required}
      error={error}
      disabled={disabled}
      minRows={minRows}
      multiline={multiline}
      readOnly={readOnly}
      helperText={helperText}
      fullWidth
      style={style}
      color={color}
      InputLabelProps={{
        shrink: shrink,
      }}
    />
  );
};

export default TextInput;
