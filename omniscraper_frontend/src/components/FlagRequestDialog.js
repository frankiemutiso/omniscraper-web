import React, { Component, useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import './FlagRequestDialog.css';
import { connect } from 'react-redux';
import { postFlagRequest } from '../store/actions/flagRequestsActions';

class FlagRequestDialog extends Component {
	state = { flagReason: '', twitterHandle: '', reasonError: false };

	submitFlaggingRequest = async () => {
		const { flagReason, twitterHandle } = this.state;
		const { postFlagRequest, videoSlug } = this.props;

		if (flagReason.length > 0 && flagReason.length <= 144) {
			const payload = {
				flagging_reason: flagReason,
				twitter_handle: twitterHandle,
				slug: videoSlug,
			};

			await postFlagRequest(payload);
			this.props.handleClose();
		} else {
			this.setState({ reasonError: true });
		}
	};

	resetComponentState = () => {
		this.setState({ reasonError: false, twitterHandle: '', flagReason: '' });
		this.props.handleClose();
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		if (value.length > 144) {
			this.setState({ reasonError: true });
		} else {
			this.setState({ [name]: value, reasonError: false });
		}
	};

	render() {
		const { open, flagRequestLoading } = this.props;
		const { handleChange, submitFlaggingRequest, resetComponentState } = this;
		const { flagReason, twitterHandle, reasonError } = this.state;

		return (
			<Dialog maxWidth='sm' fullWidth open={open}>
				<DialogTitle>Report</DialogTitle>
				<Divider />
				<DialogContent>
					<div className='flag__request_dialog-input'>
						<TextField
							label='Reason'
							value={flagReason}
							error={reasonError}
							fullWidth
							required
							minRows={2}
							multiline
							onChange={handleChange}
							helperText={
								reasonError && flagReason.length > 144
									? 'The reason should be less than 144 characters'
									: reasonError && flagReason.length == 0
									? 'A reason to flag this video is required'
									: `${flagReason.length}/144`
							}
							name='flagReason'
						/>
					</div>
					<div className='flag__request_dialog-input'>
						<TextField
							label='Twitter handle'
							value={twitterHandle}
							placeholder='Optional'
							onChange={handleChange}
							fullWidth
							name='twitterHandle'
						/>
					</div>
				</DialogContent>
				<Divider />
				<DialogActions>
					<Button onClick={resetComponentState}>Cancel</Button>
					<Button
						variant='contained'
						onClick={submitFlaggingRequest}
						endIcon={
							flagRequestLoading ? (
								<CircularProgress style={{ color: '#fff' }} />
							) : (
								''
							)
						}
					>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

const mapStateToProps = (state) => ({ ...state.flagRequests });
const mapDispatchToProps = { postFlagRequest };

export default connect(mapStateToProps, mapDispatchToProps)(FlagRequestDialog);
