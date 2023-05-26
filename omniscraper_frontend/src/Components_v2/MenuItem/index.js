import React from 'react';
import './MenuItem.css';

function MenuItem({ label, icon }) {
	return (
		<div className='p-2 px-4 flex align-center menuItem hover:bg-neutral-100 focus:ring-1 focus:ring-neutral-300'>
			{icon ? <span class='mr-2'>{icon}</span> : null}
			<p className='text-sm'>{label}</p>
		</div>
	);
}

export default MenuItem;
