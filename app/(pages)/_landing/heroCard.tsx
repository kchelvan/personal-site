import React from 'react';
import Image from 'next/image';
import profilePic from '@/public/images/profile_image.jpg';
import Link from 'next/link';

const HeroCard = () => {
	return (
		<div className='px-16 max-w-[1980px] mx-auto'>
			<p className='text-[144pt] text-center'>Keshopan Chelvan</p>
			<div className='mt-16 grid grid-cols-2 '>
				<Image alt='Keshopan Chelvan' src={profilePic} height={1440} />
				<div className='justify-between h-full w-full flex flex-col'>
					<p className='text-4xl px-12'>
						Professional Photographer and Senior Software Developer
					</p>
					<p className='text-base px-12 w-4/5 sub-text'>
						{`As an experienced React/React Native senior developer, Keshopan
						takes pride in creating high-quality, efficient, and clean code for
						applications. He has a strong background in fast-paced CI/CD and
						Agile environments, where he successfully transformed physical
						management processes into streamlined digital applications.`}
						<br />
						<br />
						{`Keshopan has completed his master's thesis work with a focus on
						early fake news detection using Artificial Intelligence and Machine
						Learning. He was nominated for the Governor General's Gold Medal for
						exception research work and presentational skills.`}
						<br />
						<br />
						{`Outside of his technical work, his passion for photography has
						developed into a successful business and his work can be seen in the
						presented`}
						<Link href={'/gallery'}>
							<p className='inline-flex text-blue-900 underline'>gallery</p>
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroCard;
