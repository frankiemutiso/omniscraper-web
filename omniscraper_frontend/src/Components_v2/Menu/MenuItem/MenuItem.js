import React from 'react';
import './MenuItem.css';

function MenuItem({ label, icon }) {
	return (
		<div className='p-2 px-4 menuItem hover:bg-neutral-100 focus:ring-1 focus:ring-neutral-300'>
			<p className='text-sm'>{label}</p>
		</div>
	);
}

export default MenuItem;
