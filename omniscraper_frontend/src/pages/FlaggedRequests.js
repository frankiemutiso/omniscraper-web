import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFlagRequests } from '../store/actions/flagRequestsActions';

class FlaggedRequests extends Component {
	componentDidMount = async () => {
		await this.props.getFlagRequests();
	};

	render() {
		const { flagRequestsList } = this.props;

		return <div>{flagRequestsList?.map((x) => x)}</div>;
	}
}

const mapStateToProps = (state) => ({ ...state.flagRequests });
const mapDispatchToProps = { getFlagRequests };

export default connect(mapStateToProps, mapDispatchToProps)(FlaggedRequests);
