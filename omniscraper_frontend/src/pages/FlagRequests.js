import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import withStyles from '@mui/styles/withStyles';
import {
	getFlagRequests,
	getGroupedFlagRequests,
} from '../store/actions/flagRequestsActions';
import './FlagRequests.css';
import { withRouter } from 'react-router';
import SlugFlagRequests from '../components/SlugFlagRequests';

const styles = () => ({});

const STATUSES = ['Pending', 'Approved', 'Rejected'];

class FlagRequests extends Component {
	state = { slug: '', requestStatus: 'Pending' };

	componentDidMount = async () => {
		const slug = new URLSearchParams(this.props.location.search)?.get('slug');
		const { requestStatus } = this.state;

		if (slug) {
			this.setState({ slug: slug });
		} else {
			await this.props.getFlagRequests(requestStatus);
		}
	};

	componentDidUpdate = async (prevProps, prevState) => {
		const { requestStatus } = this.state;

		if (prevState.requestStatus !== requestStatus) {
			await this.props.getFlagRequests(requestStatus);
		}
	};

	handleSlugFlagRequestsClick = (slug, requestStatus) => {
		var url = new URL(window.location.href);
		url.searchParams.append('slug', slug);

		window.history.pushState({}, '', url);

		this.setState({ slug: slug });
	};

	handleChange = (e) => {
		this.setState({ requestStatus: e.target.value });
	};

	render() {
		const { flagRequestsList, flagRequestsLoading } = this.props;
		const { handleSlugFlagRequestsClick, handleChange } = this;
		const { slug, requestStatus } = this.state;

		if (slug && slug.length > 0) {
			return <SlugFlagRequests slug={slug} />;
		}

		return (
			<div className='flag__requests__container'>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						marginBottom: 16,
					}}
				>
					<TextField
						id='standard-select-currency'
						select
						label='Request status'
						value={requestStatus}
						onChange={handleChange}
						size='small'
						style={{ width: 160 }}
					>
						{STATUSES.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
				</div>
				{flagRequestsLoading && (
					<div className='flag__requests'>Loading...</div>
				)}

				{flagRequestsList.length == 0 && !flagRequestsLoading && (
					<div className='flag__requests'>
						<p>No data to display at the moment.</p>
					</div>
				)}

				{flagRequestsList.length > 0 && !flagRequestsLoading && (
					<Paper variant='outlined'>
						<Table className='' aria-label='simple table'>
							<TableHead className='flag__requests-header'>
								<TableRow>
									<TableCell>
										<Typography
											variant='overline'
											className='flag__requests-text'
										>
											Slug
										</Typography>
									</TableCell>
									<TableCell>
										<Typography
											variant='overline'
											className='flag__requests-text'
										>
											Status
										</Typography>
									</TableCell>

									<TableCell>
										<Typography
											variant='overline'
											className='flag__requests-text'
										>
											Requests
										</Typography>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{flagRequestsList?.map((x) => {
									return (
										<TableRow
											hover
											key={x.slug}
											className='flag__requests-row'
											onClick={() =>
												handleSlugFlagRequestsClick(x.slug, x.request_status)
											}
										>
											<TableCell component='th' scope='row'>
												{x.slug}
											</TableCell>
											<TableCell>{x.request_status}</TableCell>
											<TableCell>{x.total}</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</Paper>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ ...state.flagRequests });
const mapDispatchToProps = { getFlagRequests, getGroupedFlagRequests };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(withRouter(FlagRequests)));
