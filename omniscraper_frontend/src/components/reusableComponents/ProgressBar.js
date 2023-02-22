import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	track: {
		background: '#0287FE',
		height: '5px',
		position: 'absolute',
		bottom: 0,
		zIndex: 1,
	},
	container: {},
}));

function ProgressBar(props) {
	const classes = useStyles();

	return (
		// <div className={classes.container}>
		<div className={classes.track} style={props.style}></div>
		// </div>
	);
}

export default ProgressBar;
