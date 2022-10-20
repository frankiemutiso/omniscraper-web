import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	bubble: {
		background: '#000',
		height: 10,
		position: 'absolute',
		width: 50,
		bottom: 10,
		right: 10,
		zIndex: 1,
		opacity: 0.6,
		padding: 8,
		color: '#fff',
		borderRadius: 10,
		display: 'grid',
		placeItems: 'center',
		fontSize: 12,
		fontFamily: 'inherit',
	},
	container: {},
}));

function TimeBubble({ duration }) {
	const classes = useStyles();

	return (
		<div className={classes.bubble}>
			<p>{duration}</p>
		</div>
	);
}

export default TimeBubble;
