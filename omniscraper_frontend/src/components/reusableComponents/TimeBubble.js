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
		opacity: 0.8,
		padding: 8,
		color: '#fff',
		borderRadius: 3,
		display: 'grid',
		placeItems: 'center',
		fontSize: 12,
		fontFamily: 'inherit',
		paddingBottom: 20,
		paddingTop: 4,
		transition: 'ease 0.25s',
	},
	container: {},
}));

function TimeBubble({ duration, children }) {
	const classes = useStyles();

	return <div className={classes.bubble}>{children}</div>;
}

export default TimeBubble;
