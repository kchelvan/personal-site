import Projects from '@/features/projects';
import Services from '@/features/services';
import React from 'react';
import ProfessionHeader from './header';

const getProjects = async () => {
	const response = await fetch(`${process.env.URL}/api/db/project`, {
		next: { revalidate: 0 },
	});

	const projects = await response.json();
	return projects;
};

const ProfessionPage = async () => {
	const { projects } = await getProjects();
	return (
		<div className='px-8 md:px-16 mx-auto lg:max-w-[1600px]'>
			<ProfessionHeader />
			<Services />
			<Projects projects={projects} />
		</div>
	);
};

export default ProfessionPage;
