import React from 'react';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import HeroBanner from './HeroBanner';

const HeroCard = () => {
	return (
		<div>
			<div className='px-16 mx-auto lg:max-w-[1600px]'>
				<HeroBanner />
				<About />
				<Services />
				<Projects />
			</div>
			<div className='bg-[#edeae5] mt-32'>
				<Contact />
			</div>
		</div>
	);
};

export default HeroCard;
