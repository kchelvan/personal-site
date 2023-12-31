import Link from 'next/link';
import React from 'react';

const route = () => {
	return (
		<div className='px-16 lg:max-w-[1980px] mx-auto'>
			<p className='text-[52px]'>Keshopan Chelvan, M.Sc, B.Sc</p>
			<p className='text-xl'>Senior React/React Native Developer</p>
			<p className='text-3xl my-8 lg:mb-8'>Highlights of Qualifications</p>
			<div>
				<p className='text-xl my-8 lg:mb-8'>
					<ul>
						<li>
							&#8226; Four plus years of professional experience working with
							React and NextJS in an Agile development environment
						</li>
						<li>
							&#8226; Two years of experience working with Salesforce API
							integration for React Applications with several years of
							experience working with RESTful APIs and frontend-backend
							integration
						</li>
						<li>
							&#8226; Two years of research work focused on Artificial
							Intelligence and Machine Learning using Python and related
							dependencies
						</li>
						<li>
							&#8226; Skilled in efficiently presenting and delivering weekly
							updates and demos of the development process
						</li>
						<li>
							&#8226; Capable of having assigned tasks completed efficiently in
							a fast-paced environment, and proficient in working with Git
							repositories
						</li>
						<li>
							&#8226; Proficient in creating reusable React-based components to
							streamline front-end development.
						</li>
						<li>
							&#8226; Experience working with NEXT.js, Vercel Database, and
							Prisma data structures for Web Development
						</li>
					</ul>
				</p>
			</div>
			<p className='text-3xl my-8 lg:mb-8'>Education</p>
			<div className='flex flex-row w-full justify-between'>
				<div className='flex flex-row'>
					<p className='text-xl '>Masters of Science (M.Sc), </p>
					<p className='text-lg font-thin'>
						{' Toronto Metropolitian University'}
					</p>
				</div>
				<p className='text-xl'>Sept 2021 - Sept 2023</p>
			</div>
			<div className='flex flex-row w-full justify-between'>
				<div className='flex flex-row'>
					<p className='text-xl'>4.0 GPA</p>
				</div>
				<p className='text-lg'>Toronto, Ontario</p>
			</div>
			<p className='text-xl'>
				<ul>
					<li>
						&#8226; Specialization in Artificial Intelligence and Machine
						Learning using Python and related dependencies
					</li>
					<li>
						&#8226; Thesis research in early fake news detection leveraging
						extracted linguistic and psychological features from the given news
						articles and propagation data
					</li>
					<li>
						&#8226; Nominated for the Governor General's Gold Medal for
						exceptional research work and presentation skills
					</li>
				</ul>
			</p>
			<div className='flex flex-row w-full justify-between mt-8'>
				<div className='flex flex-row'>
					<p className='text-xl '>Bachelor's of Science (Computer Science), </p>
					<p className='text-lg font-thin'>{' Ontario Tech University'}</p>
				</div>
				<p className='text-xl'>Sept 2018 - Apr 2018</p>
			</div>
			<div className='flex flex-row w-full justify-between'>
				<div className='flex flex-row'>
					<div className='flex flex-row'>
						<p className='text-xl'>
							<ul>
								<li>&#8226; Obtained Bachelor's Degree in Computer Science</li>
							</ul>
						</p>
					</div>
				</div>
				<p className='text-lg'>Toronto, Ontario</p>
			</div>

			<div className='flex flex-row w-full justify-between mt-8'>
				<div className='flex flex-row'>
					<p className='text-xl '>Masters of Science (M.Sc), </p>
					<p className='text-lg font-thin'>
						{' Toronto Metropolitian University'}
					</p>
				</div>
				<p className='text-xl'>Sept 2021 - Sept 2023</p>
			</div>
			<div className='flex flex-row w-full justify-between mb-8'>
				<div className='flex flex-row'>
					<p className='text-xl'>
						<ul>
							<li>&#8226; Obtained Bachelor's Degree in Computer Science</li>
						</ul>
					</p>
				</div>
				<p className='text-lg'>Toronto, Ontario</p>
			</div>
		</div>
	);
};

export default route;
