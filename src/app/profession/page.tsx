import Projects from '@/features/projects';
import Services from '@/features/services';
import React from 'react';
import ProfessionHeader from './header';

const ProfessionPage = () => {
	return (
		<div className='px-8 md:px-16 mx-auto lg:max-w-[1600px]'>
			<ProfessionHeader />
			<Services />
			<Projects />
		</div>
	);
};

export default ProfessionPage;
