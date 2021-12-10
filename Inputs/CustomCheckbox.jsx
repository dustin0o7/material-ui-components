import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const CustomCheckbox = ({
	onChange,
	label,
	name = '',
	checked = false,
	value,
	labelPlacement = 'end',
	variant = 'standard',
	size = 'normal',
	margin = 'normal',
	className = '',
	required = false,
	error = false,
	disabled = false,
	style = null,
	color = 'primary',
	icon = <CheckBoxOutlineBlankIcon />,
	checkedIcon = <CheckBoxIcon />,
}) => {
	return (
		<FormControlLabel
			control={
				<Checkbox
					icon={icon}
					checkedIcon={checkedIcon}
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
			labelPlacement={labelPlacement}
			className={className}
			label={label}
			style={style}
		/>
	);
};

export default CustomCheckbox;
