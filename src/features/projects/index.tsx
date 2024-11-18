import React from 'react';

import { PROJECTS } from './const';
import ProjectBody from './project-body';
import Divider from '@/components/ui/divider';
import ProjectImages from './project-images';

export const Project = ({
	index,
	label,
	imagesArray,
	link,
	description,
	techStack,
}: any) => {
	return (
		<div>
			<div className='grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8 md:mb-12'>
				<ProjectImages index={index} label={label} imagesArray={imagesArray} />
				<ProjectBody
					index={index}
					description={description}
					techStack={techStack}
					link={link}
					label={label}
				/>
			</div>
			<Divider />
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
			<div className='flex flex-col gap-16 md:gap-12'>
				{PROJECTS.map((project, index) => (
					<Project key={index} index={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
