import Image from 'next/image';
import React from 'react';

import ResumePageOne from '@/public/resume/resume_1.jpg';
import ResumePageTwo from '@/public/resume/resume_2.jpg';

const ResumePage = () => {
	return (
		<div
			className={`w-full flex flex-col justify-center items-center pt-14 bg-white`}
		>
			<Image src={ResumePageOne} alt={"Keshopan's Resume Page One"} />
			<Image src={ResumePageTwo} alt={"Keshopan's Resume Page Two"} />
		</div>
	);
};

export default ResumePage;
