import React from 'react';

import ProjectBody from './project-body';
import Divider from '@/components/ui/divider';
import ProjectImages from './project-images';

export const Project = ({ index, ...project }: any) => {
	return (
		<div>
			<div className='grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8 md:mb-12'>
				<ProjectImages index={index} {...project} />
				<ProjectBody index={index} {...project} />
			</div>
			<Divider />
		</div>
	);
};

const Projects = (props) => {
	return (
		<div>
			<p id='projects' className='select-none text-5xl my-8 text-[#928b7b] '>
				previous projects.
			</p>
			{props?.projects ? (
				<div className='flex flex-col gap-16 md:gap-12'>
					{props.projects?.map((project, index) => (
						<Project key={index} index={index} {...project} />
					))}
				</div>
			) : null}
		</div>
	);
};

export default Projects;
