'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import profilePic from '@/public/images/profile_image.jpg';
import react from '@/public/logo/react.png';
import tailwind from '@/public/logo/tailwind.png';
import javascript from '@/public/logo/javascript.png';
import typescript from '@/public/logo/typescript.png';
import vercel from '@/public/logo/vercel.png';
import prisma from '@/public/logo/prisma.png';
import salesforce from '@/public/logo/salesforce.png';
import RPRA_a from '@/public/projects/rpra-haztrack/rpra-1.webp';
import RPRA_b from '@/public/projects/rpra-haztrack/rpra-2.webp';
import RPRA_c from '@/public/projects/rpra-haztrack/rpra-3.webp';
import RPRA_d from '@/public/projects/rpra-haztrack/rpra-4.webp';
import RPRA_e from '@/public/projects/rpra-haztrack/rpra-5.webp';
import RPRA_f from '@/public/projects/rpra-haztrack/rpra-6.webp';
import RPRA_g from '@/public/projects/rpra-haztrack/rpra-7.webp';
import Link_Icon from '@/public/icons/link.svg';

const PROJECT_PATHS = {
	RPRA_HAZTRACK: [RPRA_a, RPRA_b, RPRA_c, RPRA_d, RPRA_e, RPRA_f, RPRA_g],
};

const HeroCard = () => {
	const [firstLoad, setFirstLoad] = useState(false);

	useEffect(() => {
		setFirstLoad(true);
	}, []);

	return (
		<div className='px-16 lg:max-w-[1600px] mx-auto '>
			<div className='h-screen pt-4'>
				<div
					className={`bg-[#c8c6bc] aspect-[11/9] w-1/2 h-5/6 absolute -z-10  left-1/2 transform -translate-x-1/2 rounded-2xl ${
						firstLoad ? 'scale-100' : 'scale-125'
					} transition-all duration-700`}
				/>
				<div>
					<p
						style={{
							opacity: !firstLoad ? '0' : '1',
							transition: 'all .9s',
							visibility: !firstLoad ? 'hidden' : 'visible',
						}}
						className={`text-[64pt] ${
							firstLoad ? 'lg:text-[120pt] ' : 'lg:text-[100pt]'
						} text-left lg:text-center transition-all text-[#1C1C1D] pt-16`}
					>
						HELLO, I&apos;M KESHOPAN
					</p>
					<p
						style={{
							opacity: !firstLoad ? '0' : '1',
							transition: 'all .9s',
							visibility: !firstLoad ? 'hidden' : 'visible',
						}}
						className={`text-[64pt] ${
							firstLoad ? 'lg:text-[120pt] ' : 'lg:text-[100pt]'
						} text-left lg:text-center transition-all text-[#edeae5]`}
					>
						HELLO, I&apos;M KESHOPAN
					</p>
					<p
						style={{
							opacity: !firstLoad ? '0' : '1',
							transition: 'all .9s',
							visibility: !firstLoad ? 'hidden' : 'visible',
						}}
						className={`text-[64pt] ${
							firstLoad ? 'lg:text-[120pt] ' : 'lg:text-[100pt]'
						} text-left lg:text-center transition-all text-[#1C1C1D]`}
					>
						HELLO, I&apos;M KESHOPAN
					</p>
				</div>
			</div>

			<div id='about' className='pt-8 lg:mt-16 h-screen'>
				<p className='text-6xl leading-normal'>
					I am proficient in creating reusable React-based components,
					streamlining front-end development to bring the client&apos;s vision
					to life.
				</p>
				<div className=' grid grid-col-1 lg:grid-cols-2 mt-16 '>
					<div className='relative'>
						<Image
							alt='Keshopan Chelvan'
							src={profilePic}
							fill
							style={{
								objectFit: 'cover',
							}}
							className='rounded-3xl -z-10'
						/>
					</div>
					<div className='h-full w-full flex flex-col justify-between'>
						<div>
							<p className='text-4xl lg:px-12 my-8 lg:my-0'>ABOUT ME</p>
							<p className='text-lg lg:px-12 sub-text mt-12 '>
								As an experienced senior{' '}
								<span className='bg-[#928b7b] rounded-lg p-1 text-white'>
									React/React Native
								</span>{' '}
								developer based in{' '}
								<span className='bg-[#928b7b] rounded-lg p-1 text-white'>
									Toronto, Canada,
								</span>{' '}
								Keshopan takes pride in creating high-quality, efficient, and
								clean code for applications. He has a strong background in{' '}
								<span className='bg-[#928b7b] rounded-lg p-1 text-white'>
									fast-paced CI/CD and Agile environments,
								</span>{' '}
								where he successfully transformed physical management processes
								into streamlined digital applications.
								<br />
								<br />
								Keshopan has completed his master&apos;s thesis with a focus on
								early fake news detection using{' '}
								<span className='bg-[#928b7b] rounded-lg p-1 text-white'>
									Artificial Intelligence and Machine Learning.
								</span>{' '}
								He was nominated for the Governor General&apos;s Gold Medal for
								exceptional research work and presentational skills.
								<br />
								<br />
								During my spare time, you&apos;ll find me exploring the city and
								capturing photos. He has launched his professional photography
								business Vanity Dreams Media.
							</p>
						</div>
					</div>
				</div>
			</div>
			<p className='mt-32 text-5xl my-8 text-[#928b7b]'>Services</p>
			<div className='grid grid-cols-2'>
				<div>
					<p className='text-3xl my-8'>services.</p>
					<p className='sub-text mx-8 mt-4'>
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
				<div className='ml-24'>
					<p className='text-4xl text-[#928b7b]'>Web Development</p>
					<p className='text-4xl text-[#928b7b]'>Artificial Intelligence</p>
					<p className='text-4xl text-[#928b7b]'>Machine Learning</p>
					<p className='text-4xl text-[#928b7b]'>Deployment</p>
				</div>
			</div>
			<div className='grid grid-cols-2 mt-12 center  my-8'>
				<div>
					<p className='text-3xl'>tech stack.</p>
					<p className='sub-text mx-8 mt-4'>
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
						<div className='flex flex-row gap-6 lg:px-8 justify-center'>
							<Image
								alt='Keshopan Chelvan'
								src={react}
								height={42}
								className='hover:scale-150 transition-all'
							/>
							<Image
								alt='Keshopan Chelvan'
								src={tailwind}
								height={42}
								className='hover:scale-150 transition-all'
							/>
							<Image
								alt='Keshopan Chelvan'
								src={javascript}
								height={42}
								className='hover:scale-150 transition-all'
							/>
							<Image
								alt='Keshopan Chelvan'
								src={typescript}
								height={42}
								className='hover:scale-150 transition-all'
							/>
							<Image
								alt='Keshopan Chelvan'
								src={vercel}
								height={42}
								className='hover:scale-150 transition-all'
							/>
							<Image
								alt='Keshopan Chelvan'
								src={prisma}
								height={42}
								className='hover:scale-150 transition-all'
							/>
							<Image
								alt='Keshopan Chelvan'
								src={salesforce}
								height={42}
								className='hover:scale-150 transition-all'
							/>
						</div>
					</div>
				</div>
				<div className='ml-24 items-center'>
					<p className='text-4xl text-[#928b7b]'>React</p>
					<p className='text-4xl text-[#928b7b]'>React Native</p>
					<p className='text-4xl text-[#928b7b]'>NextJS</p>
					<p className='text-4xl text-[#928b7b]'>Tailwind CSS</p>
					<p className='text-4xl text-[#928b7b]'>JavaScript</p>
					<p className='text-4xl text-[#928b7b]'>TypeScript</p>
					<p className='text-4xl text-[#928b7b]'>Prisma</p>
					<p className='text-4xl text-[#928b7b]'>Vercel</p>
					<p className='text-4xl text-[#928b7b]'>Salesforce</p>
				</div>
			</div>
			<p className='mt-32 text-4xl my-8'> Previous Projects</p>
			<div className='flex flex-row hover:cursor-pointer'>
				<Image alt='RPRA HazTrack' src={Link_Icon} priority />
				<p className='text-xl  pl-2 my-8'>RPRA HazTrack</p>
			</div>
			<div className='flex flex-row gap-4 overflow-auto '>
				{PROJECT_PATHS?.RPRA_HAZTRACK?.map((path, index) => (
					<Image
						key='index'
						alt={`RPRA HazTrack ${index}`}
						src={path}
						height={512}
						className='hover:scale-110 transition-all'
					/>
				))}
			</div>
			<p className='sub-text mt-4'>
				In this project, I led and mentored a team of developers to build a
				React Native-based application called RPRA HazTrack from Inception to
				Production and Maintenance for both iOS and Android. RPRA HazTrack
				enables generators, carriers, and receivers to create, update, and
				complete manifests for the movement of hazardous and liquid industrial
				wastes in compliance with Ontario&apos;s manifesting requirements under
				Ontario Regulation 347. The app provides the ability for users to manage
				and track manifests for Ontario&apos;s hazardous waste program easily
				and effectively, and seamlessly integrate their manifest content with
				the Hazardous Waste Program Registry. All activities required for
				Ontario&apos;s manifesting process, including signatures, refusals and
				corrections, can be accomplished through the app. The final product was
				one the client was very content with.
			</p>

			<p className='text-lg mt-8'>Tech Stack.</p>
			<p className='text-base sub-text'>React Native, Salesforce</p>

			<p className='mt-32 text-4xl  my-8'>Contact.</p>
		</div>
	);
};

export default HeroCard;
