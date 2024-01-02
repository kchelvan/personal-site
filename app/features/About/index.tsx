import React from 'react';

import Image from 'next/image';
import profilePic from '@/public/images/profile_image.jpg';

const About = () => {
	return (
		<div id='about' className='min-h-screen flex flex-col justify-center'>
			<p className='text-4xl lg:text-6xl leading-normal'>
				I am proficient in creating reusable React-based components,
				streamlining front-end development to bring the client&apos;s vision to
				life.
			</p>
			<div className='grid grid-col-1 xl:grid-cols-2 mt-16'>
				<div className='relative w-full h-[256px] xl:w-full xl:h-full'>
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
				<div className='h-full flex flex-col justify-between mt-8 xl:mt-0'>
					<div className='bg-[#edeae5] xl:mx-12 py-4 px-8 lg:p-16 rounded-3xl'>
						<p className='text-4xl my-8 xl:my-0'>ABOUT ME.</p>
						<p className='text-lg sub-text mt-12 '>
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
							During his spare time, you&apos;ll find him exploring the city and
							capturing photos. He has launched his professional photography
							business Vanity Dreams Media.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
