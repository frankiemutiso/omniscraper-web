import React, { Fragment, useEffect, useState } from 'react';
import { useRef } from 'react';

import './Menu.css';

function Menu({ event, children }) {
	const [xPos, setxPos] = useState(0);
	const [yPos, setyPos] = useState(0);

	const ref = useRef(null);

	useEffect(() => {
		const { clientWidth } = document.documentElement;

		let newXPos = event?.pageX;
		let newyPos = event?.pageY;

		const menuWidth = ref?.current?.clientWidth;
		const canFit = clientWidth - newXPos > menuWidth;

		if (newXPos && ref && canFit == false) {
			newXPos -= menuWidth;
		}

		setyPos(newyPos);
		setxPos(newXPos);
	}, []);

	return (
		<Fragment>
			<div
				ref={ref}
				className={event ? 'menu menu-open shadow-lg py-1' : 'menu-closed'}
				style={{ position: 'absolute', top: yPos, left: xPos }}
			>
				{children}
			</div>
		</Fragment>
	);
}

export default Menu;
