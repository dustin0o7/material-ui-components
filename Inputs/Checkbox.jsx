import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBox = ({
	onChange,
	label,
	name = '',
	checked = false,
	value,
	variant = 'standard',
	size = 'normal',
	margin = 'normal',
	className = '',
	required = false,
	error = false,
	disabled = false,
	style = null,
	color = 'primary',
}) => {
	return (
		<FormControlLabel
			control={
				<Checkbox
					checked={checked}
					onChange={onChange}
					name={name}
					value={value}
					color={color}
					variant={variant}
					size={size}
					margin={margin}
					disabled={disabled}
					required={required}
				/>
			}
			className={className}
			label={label}
			style={style}
		/>
	);
};

export default CheckBox;
