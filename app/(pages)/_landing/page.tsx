import { COLORS } from '@/app/utils/constants';
import React from 'react';
import HeroCard from './heroCard';

const LandingPage = () => {
	return (
		<div className={`w-full bg-slate-${COLORS.pageBackground}`}>
			<HeroCard />
			<div className='w-full h-[1pt] bg-black my-16' />
			{/* <HeroCard /> */}
		</div>
	);
};

export default LandingPage;
