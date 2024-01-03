'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SERVICES, TECH_STACK, TECH_STACK_TYPE } from './constants';

const Services = () => {
	const [hoveredService, setHoveredService] = useState('');
	return (
		<div className='min-h-screen flex flex-col justify-center'>
			<p id='services' className='pt-24 mt-16 text-5xl my-8 text-[#928b7b]'>
				services.
			</p>
			<div className='grid grid-cols-1 lg:grid-cols-2'>
				<div>
					<p className='text-3xl'>services.</p>
					<p className='sub-text lg:mx-8 mt-4'>
						With a passion for crafting dynamic and responsive user interfaces,
						my skills in React have enabled me to create seamless and engaging
						web experiences. From designing intuitive components to optimizing
						performance, I thrive on the challenges of building robust
						applications that push the boundaries of modern web development.
						With a keen eye for detail and a commitment to staying at the
						forefront of technological advancements, I am dedicated to
						delivering high-quality, user-centric solutions that elevate the
						online landscape.
					</p>
				</div>
				<div className='mt-8 lg:ml-24 lg:mt-0'>
					{SERVICES?.map((service: string) => (
						<p
							key={service}
							className='text-4xl text-[#928b7b] transition-all hover:scale-[120%] w-fit'
						>
							{service}
						</p>
					))}
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 mt-16 center my-8'>
				<div>
					<p className='text-3xl'>tech stack.</p>
					<p className='sub-text lg:mx-8 mt-4'>
						I primarily work with React-based systems in web and mobile
						development, but my enthusiasm doesn&apos;t stop there. I&apos;m
						always eager to explore new technologies, driven by a curiosity that
						pushes me to continuously learn. I actively seek opportunities to
						dive into emerging tools and frameworks, recognizing them as
						gateways to innovation and efficiency. This dynamic approach to
						learning ensures that my skill set remains adaptable and ready to
						tackle the challenges of the ever-evolving tech landscape.
					</p>
					<div>
						<div className='w-5/6 mx-auto h-[1pt] bg-black my-8' />
						<div className='flex flex-row gap-6 lg:px-8 flex-wrap justify-center '>
							{TECH_STACK?.map((feature: TECH_STACK_TYPE) => {
								if (!!feature?.icon) {
									return (
										<Image
											key={`${feature?.label} icon`}
											alt='Keshopan Chelvan'
											src={feature?.icon}
											height={42}
											className={`hover:scale-150 transition-all ${
												hoveredService == feature?.label ? 'scale-150' : ''
											}`}
											onMouseOver={() => setHoveredService(feature?.label)}
											onMouseLeave={() => setHoveredService('')}
										/>
									);
								} else {
									return null;
								}
							})}
						</div>
					</div>
				</div>
				<div className='mt-16 lg:ml-24 lg:mt-0 items-left'>
					{TECH_STACK?.map((feature: TECH_STACK_TYPE) => (
						<p
							key={feature?.label}
							className={`text-4xl text-[#928b7b] transition-all w-fit ${
								hoveredService == feature?.label ? 'scale-[120%]' : ''
							}`}
							onMouseOver={() => setHoveredService(feature?.label)}
							onMouseLeave={() => setHoveredService('')}
						>
							{feature?.label}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
