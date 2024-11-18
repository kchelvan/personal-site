'use client';

import React, { useState } from 'react';
import { PAPERS } from './const';

const ResearchPage = () => {
	const [selectedPaper, setSelectedPaper] = useState('');
	return (
		<div className='mt-24 mb-8'>
			<div className='flex w-full text-center text-2xl justify-center mb-8'>
				Welcome to my research portfolio.
			</div>
			<div className='flex w-full justify-center'>
				<div className='flex flex-col w-4/5 md:w-2/3'>
					<p className='sub-text '>
						My work focuses on the early detection of fake news using artificial
						intelligence, language learning models, and machine learning. I
						leverage linguistic and psychological characteristics from text to
						improve existing fake news classification systems, where I worked
						alongside Dr. Cherie Ding and Dr. Shaina Raza to achieve a
						classification accuracy rate exceeding 90%. By examining how
						language patterns and psychological cues influence the spread of
						misinformation, my research offers innovative solutions for fake
						news classification. I have also been honored with a nomination for
						the Governor General&apos;s Award for excellence in both research
						and presentation skills. Explore my findings, methodologies, and
						contributions to the ongoing efforts to combat fake news.
					</p>
					<div className='flex flex-row gap-8 md:gap-16 w-full justify-center mt-8'>
						{PAPERS.map((paper) => (
							<button
								key={paper.label}
								onClick={() => setSelectedPaper(paper.path)}
							>
								{paper.label}
							</button>
						))}
					</div>
				</div>
			</div>
			{selectedPaper ? (
				<embed
					className='w-full h-dvh mt-12 md:px-16'
					type='application/pdf'
					src={selectedPaper}
				/>
			) : null}
		</div>
	);
};

export default ResearchPage;
