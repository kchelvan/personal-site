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
};

type ProjectHeaderTypes = {
	label: string;
};

type ProjectImagesTypes = {
	label: string;
	imagesArray: any[];
};

type ProjectDescriptionTypes = {
	description: string;
	techStack: string[];
};

const ProjectHeader = ({ label }: ProjectHeaderTypes) => {
	return (
		<div className='flex flex-row hover:cursor-pointer w-auto h-auto'>
			<Image alt='RPRA HazTrack' src={Link_Icon} priority />
			<p className='text-xl  pl-2 my-8'>{label || ''}</p>
		</div>
	);
};

const ProjectImages = ({ label, imagesArray }: ProjectImagesTypes) => {
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
								<p className='text-base sub-text bg-[#edeae5] w-fit py-1 px-3 rounded-full'>
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
			<p id='projects' className='text-5xl my-8 text-[#928b7b] pt-24'>
				previous projects.
			</p>
			<p className='text-base my-8'>section in development.</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
				<div>
					<ProjectHeader label='RPRA HazTrack' />
					<ProjectImages
						label='RPRA HazTrack'
						imagesArray={PROJECT_PATHS?.RPRA_HAZTRACK}
					/>
					<ProjectDescription
						description="Keshopan acted as the lead mobile developer for this project, where he worked with and mentored a team of developers to build a
      React Native-based application called RPRA HazTrack from Inception to
      Production and Maintenance for both iOS and Android. RPRA HazTrack
      enables generators, carriers, and receivers to create, update, and
      complete manifests for the movement of hazardous and liquid industrial
      wastes in compliance with Ontario's manifesting requirements under
      Ontario Regulation 347. The app provides the ability for users to manage
      and track manifests for Ontario's hazardous waste program easily
      and effectively, and seamlessly integrate their manifest content with
      the Hazardous Waste Program Registry. All activities required for
      Ontario's manifesting process, including signatures, refusals and
      corrections, can be accomplished through the app. The final product was
      one the client was very content with."
						techStack={['React Native', 'Salesforce', 'JavaScript']}
					/>
				</div>
				<div>
					<ProjectHeader label='Marble' />
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
					<ProjectHeader label='JV Homes' />
					<ProjectDescription
						description='Details coming soon!'
						techStack={['NextJS', 'Vercel', 'Prisma', 'Tailwind', 'TypeScript']}
					/>
				</div>
				<div>
					<ProjectHeader label='GFL SMS' />
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
