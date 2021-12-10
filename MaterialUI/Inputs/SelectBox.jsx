import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";

import { isValidArray } from "../../../utils/globals.utils";

const SelectBox = ({
  onChange,
  onBlur,
  label = "",
  placeHolder = "",
  name = "",
  value = "",
  variant = "standard",
  size = "small",
  margin = "normal",
  className = "",
  formControlClassName = "",
  helperText = "",
  required = false,
  error = false,
  disabled = false,
  readOnly = false,
  shrink = true,
  style = null,
  color = "primary",
  translatedOptions = false,
  options = [],
}) => {
  const { t } = useTranslation();
  return (
    <FormControl
      className={formControlClassName}
      variant={variant}
      disabled={disabled}
      error={error}
      required={required}
      size={size}
      color={color}
      style={style}
      margin={margin}
      fullWidth>
      <InputLabel shrink={shrink} id={`select-helper-label-${name}`}>
        {label}
      </InputLabel>
      <Select
        className={className}
        labelId={`select-helper-label-${name}`}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        onBlur={onBlur}
        inputProps={{ readOnly: readOnly, shrink: shrink }}
        displayEmpty={placeHolder ? true : false}>
        {placeHolder && <MenuItem value="">{placeHolder}</MenuItem>}
        {isValidArray(options) &&
          options.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {translatedOptions ? (
                <> {t(opt.name || opt.label)}</>
              ) : (
                <>{opt.name || opt.label}</>
              )}
            </MenuItem>
          ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default SelectBox;
