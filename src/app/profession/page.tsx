import Projects from '@/features/projects';
import Services from '@/features/services';
import React from 'react';
import ProfessionHeader from './header';
import { PrismaClient } from '@prisma/client';

const getProjects = async () => {
	const prisma = new PrismaClient();
	const projects = await prisma.project.findMany({
		orderBy: [
			{
				id: 'asc',
			},
		],
	});

	return { projects };
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
