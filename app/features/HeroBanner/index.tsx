'use client';

import React, { useEffect, useState } from 'react';

type NameBannerTypes = {
	color: string;
	firstLoad: boolean;
	styles?: string;
};

const NameBanner = ({ color, firstLoad, styles }: NameBannerTypes) => {
	return (
		<p
			style={{
				opacity: !firstLoad ? '0' : '1',
				transition: 'all .9s',
				visibility: !firstLoad ? 'hidden' : 'visible',
			}}
			className={`${
				firstLoad
					? 'text-[34pt] md:text-[64pt] lg:text-[90pt] xl:text-[120pt]'
					: 'text-[24pt] md:text-[44pt] lg:text-[70pt] xl:text-[100pt]'
			} text-center transition-all text-[${color}] ${
				styles || ''
			} whitespace-nowrap`}
		>
			HELLO, I&apos;M KESHOPAN
		</p>
	);
};

const HeroBanner = () => {
	const [firstLoad, setFirstLoad] = useState(false);

	useEffect(() => {
		setFirstLoad(true);
	}, []);

	return (
		<div>
			<div className='h-screen pt-4'>
				<div
					className={`bg-[#c8c6bc] transform w-2/3 h-2/5 md:w-2/3 md:h-1/2 lg:w-3/4 lg:h-3/5 xl:w-[1024px] xl:h-5/6 absolute -z-10  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-2xl ${
						firstLoad ? 'scale-100' : 'scale-125'
					} transition-all duration-700`}
				/>
				<div className='absolute  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10  '>
					<NameBanner color='#1C1C1D' firstLoad={firstLoad} />
					<NameBanner color='#edeae5' firstLoad={firstLoad} />
					<NameBanner color='#1C1C1D' firstLoad={firstLoad} />
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
