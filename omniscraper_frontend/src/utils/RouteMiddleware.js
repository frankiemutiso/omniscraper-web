import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { Route, useLocation } from 'react-router-dom';

function RouteMiddleware({ path, component: Component, title, ...rest }) {
	const location = useLocation();

	useEffect(() => {
		window.gtag('event', 'page_view', {
			page_title: title,
			page_path: location.pathname + location.search,
			page_location: window.location.href,
		});
	}, [location]);

	return (
		<Route
			{...rest}
			path={path}
			render={(props) => <Component title={title} {...props} />}
		/>
	);
}

export default RouteMiddleware;
