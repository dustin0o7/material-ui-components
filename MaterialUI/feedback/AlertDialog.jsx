import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const AlertDialog = ({
	isOpen,
	onClose,
	onAccept,
	title = 'Title',
	content = '',
	cancelText = 'Cancel',
	acceptText = 'Accept',
	fullWidth = false,
	maxWidth = 'md',
}) => {
	return (
		<Dialog
			fullWidth={fullWidth}
			maxWidth={maxWidth}
			open={isOpen}
			onClose={onClose}
			className="popup_box">
			<DialogTitle id="alert-dialog-slide-title">
				{title}
				<IconButton aria-label="close" onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>

			{content && (
				<DialogContent>
					<DialogContentText>{content}</DialogContentText>
				</DialogContent>
			)}

			<DialogActions>
				<Button onClick={onClose} color="secondary">
					{cancelText}
				</Button>
				<Button onClick={onAccept} color="primary" autoFocus>
					{acceptText}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AlertDialog;
