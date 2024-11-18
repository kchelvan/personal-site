import React from 'react';
import About from './about';
import Contact from './contact';
import HeroBanner from './hero-banner';

const HeroCard = () => {
	return (
		<div>
			<div className='px-8 md:px-16 mx-auto lg:max-w-[1600px]'>
				<HeroBanner />
				<About />
			</div>
			<div className='bg-[#edeae5] mt-12'>
				<Contact />
			</div>
		</div>
	);
};

export default HeroCard;
