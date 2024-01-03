'use client';

import React, { useEffect, useState } from 'react';
import GithubIcon from '@/public/icons/github-mark.svg';
import LinkedInIcon from '@/public/icons/linkedin.svg';
import Image from 'next/image';
import Link from 'next/link';
import { NameBannerTypes } from './types';
import Divider from '@/app/components/ui/Divider';

const NameBanner = ({ color, firstLoad, styles }: NameBannerTypes) => {
	return (
		<p
			style={{
				opacity: !firstLoad ? '0' : '1',
				transition: 'all .9s',
				visibility: !firstLoad ? 'hidden' : 'visible',
				color: color,
			}}
			className={`${
				firstLoad
					? 'text-[34pt] md:text-[64pt] lg:text-[90pt] xl:text-[120pt]'
					: 'text-[24pt] md:text-[44pt] lg:text-[70pt] xl:text-[100pt]'
			} text-center transition-all ${styles || ''} whitespace-nowrap`}
		>
			HELLO, I&apos;M KESHOPAN
		</p>
	);
};

const HeroBanner = () => {
	const [firstLoad, setFirstLoad] = useState(false);
	const [hasLoaded, setHasLoaded] = useState(false);

	useEffect(() => {
		setFirstLoad(true);

		setTimeout(() => {
			setHasLoaded(true);
		}, 900);
	}, []);

	return (
		<div>
			<div className='h-[100lvh] xl:h-[100dvh] pt-4'>
				<div
					className={`bg-[#c8c6bc] transform w-2/3 h-2/5 md:w-2/3 md:h-1/2 lg:w-3/4 lg:h-3/5 xl:w-[1024px] xl:h-5/6 absolute -z-10  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-2xl ${
						firstLoad ? 'scale-100' : 'scale-125'
					} transition-all duration-700`}
				/>
				<div className='relative flex flex-col justify-center -z-10 h-[96%] mx-auto '>
					<NameBanner color='#1C1C1D' firstLoad={firstLoad} />
					<NameBanner color='#edeae5' firstLoad={firstLoad} />
					<NameBanner color='#1C1C1D' firstLoad={firstLoad} />
				</div>
				<div
					style={{
						opacity: !hasLoaded ? '0' : '1',
						transition: 'all .9s',
						visibility: !hasLoaded ? 'hidden' : 'visible',
					}}
					className='flex flex-row gap-8 justify-center bg-[#edeae5] w-fit mx-auto py-2 px-4 rounded-full -mt-6'
				>
					<Link href={'https://github.com/kchelvan'}>
						<Image
							src={GithubIcon}
							alt='GitHub Logo'
							height={24}
							className='hover:scale-125 transition-all hover:cursor-pointer'
						/>
					</Link>
					<Link href={'https://www.linkedin.com/in/keshopan-chelvan/'}>
						<Image
							src={LinkedInIcon}
							alt='GitHub Logo'
							height={24}
							className='hover:scale-125 transition-all hover:cursor-pointer'
						/>
					</Link>
				</div>
				<Divider />
			</div>
		</div>
	);
};

export default HeroBanner;
