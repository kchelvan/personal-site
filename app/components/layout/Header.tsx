'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery, useTheme } from '@mui/material';

const ROUTES = [
	{
		label: 'ABOUT',
		route: '/#about',
	},
	{
		label: 'PROJECTS',
		route: '/#projects',
	},
	{
		label: 'CONTACT',
		route: '/#contact',
	},
];

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<div
				className={`transition-all duration-300 ease-in-out absolute h-full right-0 top-0 ${
					isOpen ? 'w-2/3 px-8' : 'w-0'
				} bg-[#1C1C1D] py-8 overflow-hidden`}
			>
				<p className='text-[#FAFAFA] mb-4 md:mb-8 text-2xl md:text-4xl text-right mt-16'>
					PORTFOLIO
				</p>
				{ROUTES?.map((route) => (
					<Link key={route.route} href={route.route}>
						<p className='text-[#FAFAFA] text-right mb-2 md:mb-4 text-base md:text-2xl'>
							{route.label}
						</p>
					</Link>
				))}
			</div>
			<button
				onClick={() => setIsOpen((prevState) => !prevState)}
				className='flex flex-col justify-center items-center z-10 mr-8'
			>
				<span
					className={` block transition-all duration-300 ease-in-out 
							h-0.5 w-6 rounded-sm ${
								isOpen
									? 'rotate-45 translate-y-1 bg-white'
									: '-translate-y-0.5 bg-black'
							}`}
				></span>
				<span
					className={`block transition-all duration-300 ease-in-out 
							h-0.5 w-6 rounded-sm my-0.5 ${
								isOpen ? 'opacity-0 bg-white' : 'opacity-100 bg-black'
							}`}
				></span>
				<span
					className={`block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
						isOpen
							? '-rotate-45 -translate-y-1 bg-white'
							: 'translate-y-0.5 bg-black'
					}`}
				></span>
			</button>
		</div>
	);
};

const Header = () => {
	const theme = useTheme();
	const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<div className=''>
			<div className='flex flex-row my-12 justify-between items-center'>
				<Link
					className='sub-text text-lg px-12 hover:cursor-pointer'
					href={'/#hero'}
				>
					PORTFOLIO
				</Link>
				{!isMobileSize ? (
					<div className='flex flew-row mr-8'>
						{ROUTES?.map((route) => (
							<Link
								key={route.route}
								className='sub-text text-lg px-8 hover:scale-110 transition-all'
								href={route.route}
							>
								{route.label}
							</Link>
						))}
					</div>
				) : (
					<HamburgerMenu />
				)}
			</div>
			<div>
				<div className='w-full h-[1pt] bg-black mb-16' />
			</div>
		</div>
	);
};

export default Header;
