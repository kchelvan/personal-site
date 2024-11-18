'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={`bg-[#1C1C1D] h-full w-full p-16 `}>
			<div className='lg:max-w-[1600px] lg:mx-auto lg:px-16'>
				<div className='flex flex-row'>
					<div>
						<p className={`text-2xl text-[#FAFAFA] mb-1`}>SOCIALS</p>
						<div>
							<Link href={'https://www.linkedin.com/in/keshopan-chelvan/'}>
								<p className={`text-base sub-text text-[#FAFAFA] underline`}>
									LinkedIn
								</p>
							</Link>
							<Link href={'https://www.instagram.com/keshopan/'}>
								<p className={`text-base sub-text text-[#FAFAFA] underline`}>
									Instagram
								</p>
							</Link>
							<Link href={'https://github.com/kchelvan'}>
								<p className={`text-base sub-text text-[#FAFAFA] underline`}>
									Github
								</p>
							</Link>
						</div>
					</div>
				</div>
				<div className='flex flex-col md:flex-row justify-between'>
					<p className={`text-base sub-text text-[#FAFAFA] mt-8`}>
						© 2023 Keshopan Chelvan
					</p>
					<p className={`text-base sub-text text-[#FAFAFA] mt-8`}>
						Designed and Developed by Keshopan using NextJS.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
