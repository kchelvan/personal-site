import React from 'react';

import Image from 'next/image';
import profilePic from '@/public/images/profile_image.webp';

const About = () => {
	return (
		<div id='about' className='min-h-screen flex flex-col justify-center'>
			<div className='grid grid-col-1 xl:grid-cols-2 mt-16'>
				<div className='relative w-full h-[384px] xl:w-full sm:h-[512px] xl:h-full'>
					<Image
						alt='Keshopan Chelvan'
						src={profilePic}
						fill
						style={{
							objectFit: 'cover',
							objectPosition: '50% 25%',
						}}
						className='rounded-3xl -z-10'
					/>
				</div>
				<div className='h-full flex flex-col justify-between mt-8 xl:mt-0'>
					<div className='bg-[#edeae5] xl:mx-12 py-4 px-8 lg:p-16 rounded-3xl'>
						<p className='select-none text-4xl my-8 xl:my-0'>ABOUT ME.</p>
						<p className='text-lg sub-text mt-12 leading-loose'>
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
								fast-paced CI/CD
							</span>{' '}
							and{' '}
							<span className='bg-[#928b7b] rounded-lg p-1 text-white'>
								Agile environments
							</span>
							, where he successfully transformed physical management processes
							into streamlined digital applications. View his{' '}
							<a className='underline' href='/profession'>
								portfolio
							</a>
							.
							<br />
							<br />
							Keshopan has completed his master&apos;s thesis with a focus on
							early fake news detection using{' '}
							<span className='bg-[#928b7b] rounded-lg p-1 text-white'>
								Artificial Intelligence
							</span>{' '}
							and{' '}
							<span className='bg-[#928b7b] rounded-lg p-1 text-white'>
								Machine Learning
							</span>
							. He was nominated for the Governor General&apos;s Gold Medal for
							exceptional research work and presentational skills. View his{' '}
							<a className='underline' href='/research'>
								research
							</a>
							.
							<br />
							<br />
							During his spare time, you&apos;ll find him exploring the city and
							capturing snapshots. He has worked on several photoshoots, which
							can be viewed on his{' '}
							<a className='underline' href='/photography'>
								portfolio
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
