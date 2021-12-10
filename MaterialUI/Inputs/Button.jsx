import React from 'react';
import { Button as MUIButton, CircularProgress } from '@material-ui/core';

const Button = ({
	className = '',
	label = 'Button',
	variant = 'contained',
	color = 'primary',
	size = 'normal',
	href = '',
	loading = false,
	loaderColor = 'secondary',
	loaderSize = 20,
	disabled = false,
	disableElevation = false,
	disableFocusRipple = false,
	fullWidth = true,
	startIcon = null,
	endIcon = null,
	style = null,
	loaderStyle = { marginRight: '20px' },
	onclick,
}) => {
	return (
		<MUIButton
			fullWidth={fullWidth}
			className={className}
			variant={variant}
			color={color}
			size={size}
			href={href}
			onClick={onclick}
			startIcon={startIcon}
			endIcon={endIcon}
			disabled={disabled}
			disableElevation={disableElevation}
			disableFocusRipple={disableFocusRipple}
			style={style}>
			{loading && (
				<CircularProgress
					color={loaderColor}
					size={loaderSize}
					style={loaderStyle}
				/>
			)}
			{label}
		</MUIButton>
	);
};

export default Button;
