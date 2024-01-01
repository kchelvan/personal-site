import React from 'react';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import HeroBanner from './HeroBanner';

const HeroCard = () => {
	return (
		<div className='px-16 lg:max-w-[1600px] mx-auto '>
			<HeroBanner />
			<About />
			<Services />
			<Projects />
			<Contact />
		</div>
	);
};

export default HeroCard;
