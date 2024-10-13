'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link_Icon from '@/public/icons/link.svg';
import RPRA_a from '@/public/projects/rpra-haztrack/rpra-1.webp';
import RPRA_b from '@/public/projects/rpra-haztrack/rpra-2.webp';
import RPRA_c from '@/public/projects/rpra-haztrack/rpra-3.webp';
import RPRA_d from '@/public/projects/rpra-haztrack/rpra-4.webp';
import RPRA_e from '@/public/projects/rpra-haztrack/rpra-5.webp';
import RPRA_f from '@/public/projects/rpra-haztrack/rpra-6.webp';
import RPRA_g from '@/public/projects/rpra-haztrack/rpra-7.webp';

import Marble_a from '@/public/projects/marble/marble-1.webp';
import Marble_b from '@/public/projects/marble/marble-2.webp';
import Marble_c from '@/public/projects/marble/marble-3.webp';
import Marble_d from '@/public/projects/marble/marble-4.webp';
import Marble_e from '@/public/projects/marble/marble-5.webp';
import Marble_f from '@/public/projects/marble/marble-6.webp';
import Marble_g from '@/public/projects/marble/marble-7.webp';

import JV_Home from '@/public/projects/jv-homes/jv-2.png';

import RKS_Hero from '@/public/projects/rks/hero.png';

import Davids_Bridal_a from '@/public/projects/davids-bridal/bridal-mobile-plp.png';
import Davids_Bridal_b from '@/public/projects/davids-bridal/db_appointments_a.png';
import Davids_Bridal_c from '@/public/projects/davids-bridal/db_appointments_b.png';

import Link from 'next/link';

const PROJECT_PATHS = {
	RPRA_HAZTRACK: [RPRA_a, RPRA_b, RPRA_c, RPRA_d, RPRA_e, RPRA_f, RPRA_g],
	Marble: [
		Marble_a,
		Marble_b,
		Marble_c,
		Marble_d,
		Marble_e,
		Marble_f,
		Marble_g,
	],
	JV_Homes: [JV_Home],
	RKS: [RKS_Hero],
	Davids_Bridal: [Davids_Bridal_a, Davids_Bridal_b, Davids_Bridal_c],
};

type ProjectHeaderTypes = {
	label: string;
	link?: string;
};

type ProjectImagesTypes = {
	label: string;
	imagesArray: any[];
	scroll?: boolean;
};

type ProjectDescriptionTypes = {
	description: string;
	techStack: string[];
};

const ProjectHeader = ({ label, link }: ProjectHeaderTypes) => {
	return (
		<Link
			href={link || ''}
			className='flex flex-row hover:cursor-pointer w-auto h-auto'
		>
			<Image alt='RPRA HazTrack' src={Link_Icon} priority />
			<p className='text-xl  pl-2 my-8'>{label || ''}</p>
		</Link>
	);
};

const ProjectImages = ({
	label,
	imagesArray,
	scroll = false,
}: ProjectImagesTypes) => {
	const [imageCounter, setImageCounter] = useState(0);

	const api = () => {
		if (imageCounter < imagesArray.length - 1) {
			setImageCounter(imageCounter + 1);
		} else {
			setImageCounter(0);
		}
		setTimeout(api, 1000);
	};

	useEffect(() => {
		api();
	}, []);

	return (
		<div className='transition-all w-full'>
			<Image
				alt={`${label} ${imageCounter}`}
				src={imagesArray[imageCounter]}
				height={512}
			/>
		</div>
	);
};

const ProjectDescription = ({
	description,
	techStack,
}: ProjectDescriptionTypes) => {
	return (
		<div>
			<p className={`sub-text ${techStack?.length > 0 ? 'mt-4' : ''}`}>
				{description}
			</p>
			{techStack?.length > 0 ? (
				<div>
					<p className='text-lg mt-8'>Tech Stack.</p>
					<div className='flex flex-row gap-4 mt-2 flex-wrap'>
						{techStack?.map((tech: string) => (
							<div key={tech}>
								<p className='select-none text-base sub-text bg-[#edeae5] w-fit py-1 px-3 rounded-full hover:scale-[120%] transition-all'>
									{tech}
								</p>
							</div>
						))}
					</div>
				</div>
			) : null}
		</div>
	);
};

const Projects = () => {
	return (
		<div>
			<p
				id='projects'
				className='select-none text-5xl my-8 text-[#928b7b] pt-24'
			>
				previous projects.
			</p>
			<p className='text-base my-8'>section in development.</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
				<div>
					<ProjectHeader
						label='RKS Saloon'
						link='https://rks-web.vercel.app/'
					/>
					<ProjectImages
						label='RKS Saloon'
						imagesArray={PROJECT_PATHS?.RKS}
						scroll
					/>
					<ProjectDescription
						description='Details coming soon!'
						techStack={[
							'React',
							'NextJS',
							'TypeScript',
							'AWS',
							'Vercel',
							'JavaScript',
						]}
					/>
				</div>
				<div>
					<ProjectHeader
						label="David's Bridal"
						link='https://www.davidsbridal.com/'
					/>
					<ProjectImages
						label="David's Bridal"
						imagesArray={PROJECT_PATHS?.Davids_Bridal}
					/>
					<ProjectDescription
						description={`Keshopan developed NextJS-based web applications using technologies like React, GraphQL, NextJS, Styled Components, TypeScript, and Magento. He created reusable React components to improve the user interface and maintain code quality. By working with backend developers, Keshopan integrated GraphQL APIs to ensure a smooth connection between frontend components and Magento-powered e-commerce platforms. He used Styled Components to build consistent, pixel-perfect UI elements based on Figma designs and leveraged TypeScript to improve code reliability and scalability.

Keshopan collaborated with UI/UX designers, product managers, and backend developers to deliver integrated solutions. He optimized application performance through techniques like code splitting and image optimization, ensuring compatibility across different browsers and devices using responsive design principles.

Keshopan participated in code reviews, provided feedback to the team, and contributed to sprint planning and daily stand-ups. He also documented frontend components, APIs, and integration processes to support team collaboration. Additionally, Keshopan conducted thorough testing and debugging to ensure the delivery of high-quality, bug-free code.`}
						techStack={[
							'React',
							'NextJS',
							'Javascript',
							'Typescript',
							'e-commerce',
							'JIRA',
							'Agile/Scrum',
							'CSS',
							'GraphQL',
							'Magento',
						]}
					/>
				</div>
				<div>
					<ProjectHeader label='JV Homes' link='https://www.jvhome.ca/' />
					<ProjectImages
						label='RPRA HazTrack'
						imagesArray={PROJECT_PATHS?.JV_Homes}
						scroll
					/>
					<ProjectDescription
						description='Details coming soon!'
						techStack={[
							'NextJS',
							'Vercel',
							'Prisma',
							'Tailwind',
							'TypeScript',
							'Google Maps API',
						]}
					/>
				</div>
				<div>
					<ProjectHeader
						label='Marble'
						link='https://play.google.com/store/apps/details?id=ai.mymarble.marble&hl=en_CA&gl=US'
					/>
					<ProjectImages
						label='RPRA HazTrack'
						imagesArray={PROJECT_PATHS?.Marble}
					/>
					<ProjectDescription
						description='Keshopan acted as the senior front-end developer for the Marble project, where he worked with and mentored a team of front-end developers to build a baby development tracker called Marble using Artificial Intelligence. He collaborated with a team of backend developers, data analysts, designers, and business management. The Marble app is a novel tool for new parents to use to track their baby’s development in-between doctor visits. The app gives parents of newborn infants many advantages, including: tracking for feedings, sleeping, diapers, and growth across all developmental milestones: physical, gross motor, communication, cognitive, social, and emotional.'
						techStack={['React Native', 'JavaScript']}
					/>
				</div>
				<div>
					<ProjectHeader label='GFL SMS' link='' />
					<ProjectDescription
						description='Details coming soon!'
						techStack={['React', 'CSS', 'JavaScript']}
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
