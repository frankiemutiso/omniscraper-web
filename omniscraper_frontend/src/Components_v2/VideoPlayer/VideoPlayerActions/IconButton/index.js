import React from 'react';
import './index.css';

function IconButton({ show, children, ...restProps }) {
	return (
		<button
			className={`${
				show
					? 'icon-btn rounded-full p-2 focus:outline-none focus:ring-1 focus:ring-white'
					: 'icon-btn-hide'
			}`}
			{...restProps}
		>
			{children}
		</button>
	);
}

export default IconButton;
