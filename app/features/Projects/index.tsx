import React from 'react';

import Image from 'next/image';
import Link_Icon from '@/public/icons/link.svg';
import RPRA_a from '@/public/projects/rpra-haztrack/rpra-1.webp';
import RPRA_b from '@/public/projects/rpra-haztrack/rpra-2.webp';
import RPRA_c from '@/public/projects/rpra-haztrack/rpra-3.webp';
import RPRA_d from '@/public/projects/rpra-haztrack/rpra-4.webp';
import RPRA_e from '@/public/projects/rpra-haztrack/rpra-5.webp';
import RPRA_f from '@/public/projects/rpra-haztrack/rpra-6.webp';
import RPRA_g from '@/public/projects/rpra-haztrack/rpra-7.webp';

const PROJECT_PATHS = {
	RPRA_HAZTRACK: [RPRA_a, RPRA_b, RPRA_c, RPRA_d, RPRA_e, RPRA_f, RPRA_g],
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
	return (
		<div className='flex flex-row gap-4 overflow-auto '>
			{imagesArray?.map((path, index) => (
				<Image
					key={index}
					alt={`${label} ${index}`}
					src={path}
					height={512}
					className='hover:scale-110 transition-all w-auto'
				/>
			))}
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
					<p className='text-base sub-text'>{techStack?.join(' ')}</p>
				</div>
			) : null}
		</div>
	);
};

const Projects = () => {
	return (
		<div>
			<p id='projects' className='pt-32 text-5xl my-8 text-[#928b7b]'>
				Previous Projects.
			</p>
			<ProjectHeader label='RPRA HazTrack' />
			<ProjectImages
				label='RPRA HazTrack'
				imagesArray={PROJECT_PATHS?.RPRA_HAZTRACK}
			/>
			<ProjectDescription
				description="In this project, I led and mentored a team of developers to build a
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
				techStack={['React Native', 'Salesforce']}
			/>
			<ProjectHeader label='Marble' />
			<ProjectDescription description='Details coming soon!' techStack={[]} />
			<ProjectHeader label='JV Homes' />
			<ProjectDescription description='Details coming soon!' techStack={[]} />
			<ProjectHeader label='Portfolio' />
			<ProjectDescription description='Details coming soon!' techStack={[]} />
			<ProjectHeader label='Vanity Dreams' />
			<ProjectDescription description='Details coming soon!' techStack={[]} />
		</div>
	);
};

export default Projects;
