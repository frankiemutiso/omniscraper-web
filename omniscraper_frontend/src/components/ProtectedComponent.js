import React from 'react';
import { Redirect } from 'react-router-dom';

function ProtectedComponent(props) {
	const { loggedIn, children } = props;

	if (!loggedIn) {
		return <Redirect to='' />;
	}

	return <div>{children}</div>;
}

export default ProtectedComponent;
