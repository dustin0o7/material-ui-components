import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';

const DatePicker = ({
	onChange,
	label,
	format = 'dd/MM/yyyy',
	placeHolder = '',
	name = '',
	value = '',
	variant = 'standard',
	size = 'small',
	margin = 'normal',
	className = '',
	helperText = '',
	required = false,
	error = false,
	disabled = false,
	readOnly = false,
	shrink = true,
	disableToolbar = false,
	disablePast = false,
	style = null,
	color = 'primary',
}) => {
	return (
		<KeyboardDatePicker
			fullWidth
			disableToolbar={disableToolbar}
			margin={margin}
			label={label}
			format={format}
			value={value}
			onChange={onChange}
			placeholder={placeHolder}
			name={name}
			variant={variant}
			size={size}
			className={className}
			helperText={helperText}
			required={required}
			error={error}
			disabled={disabled}
			readOnly={readOnly}
			color={color}
			style={style}
			KeyboardButtonProps={{
				'aria-label': { label },
			}}
			InputLabelProps={{
				shrink: shrink,
			}}
			disablePast={disablePast}
		/>
	);
};

export default DatePicker;
