import JV_a from '@/public/projects/jv-homes/jv-1.jpg';
import JV_b from '@/public/projects/jv-homes/jv-2.jpg';
import JV_c from '@/public/projects/jv-homes/jv-3.jpg';

import RKS_a from '@/public/projects/rks/rks_1.jpg';
import RKS_b from '@/public/projects/rks/rks_2.jpg';
import RKS_c from '@/public/projects/rks/rks_3.jpg';

import Davids_Bridal_a from '@/public/projects/davids-bridal/db-1.jpg';
import Davids_Bridal_b from '@/public/projects/davids-bridal/db-2.jpg';
import Davids_Bridal_c from '@/public/projects/davids-bridal/db-3.jpg';

import Sumathy_a from '@/public/projects/sumathy-portfolio/sumathy-1.jpg';

import Marble_a from '@/public/projects/marble/marble-1.jpg';
import Marble_b from '@/public/projects/marble/marble-2.jpg';
import Marble_c from '@/public/projects/marble/marble-3.jpg';
import Marble_d from '@/public/projects/marble/marble-4.jpg';

import RPRA_a from '@/public/projects/rpra-haztrack/rpra-1.jpg';
import RPRA_b from '@/public/projects/rpra-haztrack/rpra-2.jpg';
import RPRA_c from '@/public/projects/rpra-haztrack/rpra-3.jpg';
import RPRA_d from '@/public/projects/rpra-haztrack/rpra-4.jpg';

import SMS_a from '@/public/projects/sms/sms-1.jpg';
import SMS_b from '@/public/projects/sms/sms-2.jpg';
import SMS_c from '@/public/projects/sms/sms-3.jpg';

// import ComingSoon from '@/public/images/coming_soon.jpg';

const PROJECT_PATHS = {
	RPRA_HAZTRACK: [RPRA_a, RPRA_b, RPRA_c, RPRA_d],
	Marble: [Marble_a, Marble_b, Marble_c, Marble_d],
	SMS: [SMS_a, SMS_b, SMS_c],
	JV_Homes: [JV_a, JV_b, JV_c],
	RKS: [RKS_a, RKS_b, RKS_c],
	Davids_Bridal: [Davids_Bridal_a, Davids_Bridal_b, Davids_Bridal_c],
	Sumathy_Portfolio: [Sumathy_a],
};

const PROJECT_DESCRIPTIONS = {
	Marble: `As the Senior Front-End Developer for the Marble project, Keshopan mentored a team of front-end developers to create an innovative baby development tracker powered by Artificial Intelligence. From initializing the codebase to deploying the application into production, he led the development process and ensured the delivery of a high-quality product. Collaborating closely with backend developers, data analysts, designers, and business management, he played a key role in delivering a seamless and user-friendly experience.\n\nThe Marble app is designed to support new parents by providing a comprehensive tool to monitor their baby’s development between doctor visits. Features include tracking feedings, sleep patterns, diaper changes, and growth milestones across various domains: physical, gross motor, communication, cognitive, social, and emotional development.\n\nThe application was built in React Native Expo and features several animations for images and navigation, robust test cases for key functionality, AI-based data statistics, and several graphing systems while providing a fluid, seamless user experience on several device types through performance optimizations.`,
	Sumathy_Portfolio: `Keshopan is currently working on developing a personal portfolio website for a client in the film industry as a freelance project. The website is being built using Next.js and is still in the very early stages of development.\n\nThus far, Keshopan has completed the full design of the webpage, focusing on creating a visually engaging and user-friendly interface tailored to showcase the client’s work and achievements in film. Additional details about the project will be shared as development progresses.`,
	RKS: `Keshopan designed and developed a professional website for a barbershop client using Next.js as a freelance project. He focused on creating an intuitive and user-friendly interface to provide a seamless browsing experience for visitors.\n\nThe website was built with a strong emphasis on SEO optimization, aiming to improve the barbershop's visibility in search engine results when users search for its location. This included implementing optimized metadata, fast load times, and mobile responsiveness to enhance search rankings and attract more local traffic.`,
	SMS: `Keshopan worked on the development and enhancement of a proprietary web application for GFL, designed to manage waste services through a digital client platform. Collaborating with a team of several professionals, including fifteen developers, he leveraged Agile methodologies and CI/CD pipelines to ensure efficient and reliable development cycles, and create detailed yet consise weekly demos to showcase the applications development.\n\nThe application was built using ReactJS, incorporating modern foundational principles such as React Hooks and Redux. Keshopan independently drove critical performance optimizations, successfully reducing UI delays from approximately ten seconds to under one second, significantly improving the speed and overall user experience of the platform.\n\nIn addition to performance improvements, Keshopan developed several new webpages and features for the application. Each was implemented using the latest React principles, including React Hooks, to deliver highly efficient and maintainable solutions that aligned with modern best practices.\n\nThis project highlights Keshopan’s advanced expertise in React development, his ability to independently solve complex performance challenges, and his contribution to building scalable, user-centric features in a collaborative environment.`,
	JV_Homes: `Keshopan served as a full-stack developer for the development of JV Homes, a real estate and rental platform currently in the process of launching. Working closely with a team of designers, Scrum Masters, and product owners in an Agile environment, Keshopan contributed to the development of a highly functional website built with Next.js.\n\nHe leveraged server-side rendering and implemented SEO optimizations to ensure that the platform was both fast and easily discoverable by search engines, delivering a website that met and exceeded the client’s expectations.\n\nhe utilized AWS for cloud hosting, S3 buckets for efficient file storage, and Prisma for database management. Additionally, he handled deployments using Git and Vercel, ensuring smooth and efficient rollouts.`,
	DBI: `At David's Bridal, Keshopan was instrumental in the development and enhancement of web applications built with NextJS, React, GraphQL, TypeScript, Styled Components, and Magento. He led the redesign of the mobile product list page and the full appointments booking application, focusing on improving user experience and performance.\n\nKeshopan collaborated closely with a cross-functional team of over 100 developers and external vendors, leveraging key technologies such as Magento, TimeTrade, Bloomreach, and LivePerson Chat to deliver seamless, integrated solutions. His expertise in React and TypeScript allowed him to build reusable, scalable UI components while ensuring high-quality, consistent design based on Figma prototypes. He integrated GraphQL APIs to ensure seamless connections between frontend components and the Magento e-commerce platform, driving smoother user interactions and improved performance.\n\nThroughout the project, Keshopan focused on optimizing the website’s performance, employing techniques such as code splitting and image optimization. He worked closely with backend developers, UI/UX designers, and product managers to refine the platform, ensuring compatibility across browsers and devices using responsive design principles.\n\nKeshopan actively contributed to code reviews, sprint planning, and daily stand-ups. He also played a pivotal role in documenting frontend components and integration processes to facilitate team collaboration. His dedication to thorough testing and debugging ensured that high-quality, bug-free code was delivered on time.`,
	RPRA: `Keshopan led the front-end development of a proprietary waste management system built with React Native CLI. The application was designed to digitize an existing paper-based tracking system, allowing vehicle drivers to track toxic waste from industrial sources through a mobile platform. It enables drivers to collect signatures and complete manifests, streamlining the waste management process.\n\nThis project involved seamless integration with Salesforce and REST APIs, allowing data to flow between the mobile app and the backend efficiently. Keshopan worked closely with team members smoothly integration and optimized the application for high performance and scalability.\n\nIn addition to leading the development of this innovative solution, Keshopan mentored teams of developers throughout the project, from inception through to production and maintenance. He ensured the application adhered to best practices and high coding standards, with a particular emphasis on mobile app security, using PKCE login and adhering to accessibility standards (AODA). He also drove weekly demos to showcase the team's progress and gather feedback.\n\nHe also focused on delivering robust, maintainable code by creating effective unit tests to ensure quality and reliability across the application. The final product exceeded the client's expectations, delivering a seamless digital solution. However, the drivers weren't as enthusiastic about the switch from paper to digital, with some expressing their frustration about the change.`,
};

export const PROJECTS = [
	{
		label: "David's Bridal",
		imagesArray: PROJECT_PATHS.Davids_Bridal,
		description: PROJECT_DESCRIPTIONS.DBI,
		link: 'https://www.davidsbridal.com/',
		techStack: [
			'React',
			'NextJS',
			'Javascript',
			'Typescript',
			'E-Commerce',
			'JIRA',
			'Agile/Scrum',
			'CSS',
			'GraphQL',
			'Magento',
			'JEST',
		],
	},
	{
		label: 'JV Homes',
		imagesArray: PROJECT_PATHS.JV_Homes,
		description: PROJECT_DESCRIPTIONS.JV_Homes,
		link: 'https://www.jvhome.ca/',
		techStack: [
			'React',
			'NextJS',
			'Vercel',
			'Prisma',
			'Tailwind CSS',
			'JavaScript',
			'TypeScript',
			'JIRA',
			'Agile/Scrum',
			'AWS',
			'S3',
			'REST API',
			'Google Maps API',
		],
	},
	{
		label: 'Proprietary Mobile Application (Confidential)',
		imagesArray: PROJECT_PATHS.RPRA_HAZTRACK,
		description: PROJECT_DESCRIPTIONS.RPRA,
		// link: '',
		techStack: [
			'React Native',
			'React Native CLI',
			'Salesforce',
			'CSS',
			'JIRA',
			'Agile/Scrum',
			'JavaScript',
			'TypeScript',
			'Styled Components',
			'REST API',
			'JEST',
		],
	},
	{
		label: 'Marble (Unreleased)',
		imagesArray: PROJECT_PATHS.Marble,
		description: PROJECT_DESCRIPTIONS.Marble,
		link: 'https://www.mymarble.ai/',
		techStack: [
			'React Native',
			'Expo',
			'CSS',
			'JIRA',
			'Agile/Scrum',
			'JavaScript',
			'TypeScript',
			'Styled Components',
			'Rest API',
			'JEST',
		],
	},
	{
		label: 'GFL SMS',
		imagesArray: PROJECT_PATHS.SMS,
		description: PROJECT_DESCRIPTIONS.SMS,
		link: '',
		techStack: [
			'React',
			'CSS',
			'JIRA',
			'Agile/Scrum',
			'JavaScript',
			'TypeScript',
			'REST API',
			'JEST',
		],
	},
	{
		label: 'RKS Saloon',
		imagesArray: PROJECT_PATHS.RKS,
		description: PROJECT_DESCRIPTIONS.RKS,
		link: 'https://rks-web.vercel.app/',
		techStack: ['React', 'NextJS', 'TypeScript', 'AWS', 'Vercel', 'JavaScript'],
	},
	{
		label: 'Film Maker Personal Portfolio',
		imagesArray: PROJECT_PATHS.Sumathy_Portfolio,
		description: PROJECT_DESCRIPTIONS.Sumathy_Portfolio,
		// link: 'https://karupy-sumathy.vercel.app/',
		techStack: [
			'React',
			'NextJS',
			'JavaScript',
			'TypeScript',
			'AWS',
			'S3',
			'Vercel',
		],
	},
];
