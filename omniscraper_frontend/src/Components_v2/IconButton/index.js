import React from 'react';
import './index.css';

function IconButton({ show, children, ...restProps }) {
	return (
		<button
			className={`${
				show
					? 'icon-btn ml-2 bg-neutral-200 rounded-full p-2 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-500'
					: 'icon-btn-hide'
			}`}
			{...restProps}
		>
			{children}
		</button>
	);
}

export default IconButton;
