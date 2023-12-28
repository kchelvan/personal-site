'use client';

import React from 'react';
import Link from 'next/link';

const ROUTES = [
	{
		label: 'GALLERY',
		route: '/gallery',
	},
	{
		label: 'RESUME',
		route: '/resume',
	},
	{
		label: 'CAREER',
		route: '/career',
	},
	{
		label: 'CONTACT',
		route: '/contact',
	},
];

const Footer = () => {
	return (
		<div>
			<div className='flex flex-row my-12 justify-between'>
				<Link className='sub-text text-lg px-12' href={'/'}>
					PORTFOLIO
				</Link>
				<div className='flex flew-row mr-8'>
					{ROUTES?.map((route) => (
						<Link className='sub-text text-lg px-8' href={route.route}>
							{route.label}
						</Link>
					))}
				</div>
			</div>
			<div className='w-full h-[1pt] bg-black mb-16' />
		</div>
	);
};

export default Footer;
