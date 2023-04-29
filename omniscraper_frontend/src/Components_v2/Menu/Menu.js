import React from 'react';
import './Menu.css';

function Menu({ event, handleClose, children }) {
	let xPos = event?.pageX;
	let yPos = event?.pageY;

	return (
		<div
			className={event ? 'menu menu-open shadow-lg' : 'menu-closed'}
			style={{ position: 'absolute', top: yPos, left: xPos }}
		>
			{children}
		</div>
	);
}

export default Menu;
