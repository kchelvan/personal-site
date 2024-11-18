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

import ComingSoon from '@/public/images/coming_soon.jpg';

const PROJECT_PATHS = {
	RPRA_HAZTRACK: [ComingSoon],
	Marble: [ComingSoon],
	SMS: [ComingSoon],
	JV_Homes: [JV_a, JV_b, JV_c],
	RKS: [RKS_a, RKS_b, RKS_c],
	Davids_Bridal: [Davids_Bridal_a, Davids_Bridal_b, Davids_Bridal_c],
	Sumathy_Portfolio: [Sumathy_a],
};

export const PROJECTS = [
	{
		label: "David's Bridal",
		imagesArray: PROJECT_PATHS.Davids_Bridal,
		description: `Keshopan developed NextJS-based web applications using technologies like React, GraphQL, NextJS, Styled Components, TypeScript, and Magento. He created reusable React components to improve the user interface and maintain code quality. By working with backend developers, Keshopan integrated GraphQL APIs to ensure a smooth connection between frontend components and Magento-powered e-commerce platforms. He used Styled Components to build consistent, pixel-perfect UI elements based on Figma designs and leveraged TypeScript to improve code reliability and scalability.

Keshopan collaborated with UI/UX designers, product managers, and backend developers to deliver integrated solutions. He optimized application performance through techniques like code splitting and image optimization, ensuring compatibility across different browsers and devices using responsive design principles.

Keshopan participated in code reviews, provided feedback to the team, and contributed to sprint planning and daily stand-ups. He also documented frontend components, APIs, and integration processes to support team collaboration. Additionally, Keshopan conducted thorough testing and debugging to ensure the delivery of high-quality, bug-free code.`,
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
		label: 'Proprietary Mobile Application',
		imagesArray: PROJECT_PATHS.RPRA_HAZTRACK,
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
		description:
			'Keshopan acted as the senior front-end developer for the Marble project, where he worked with and mentored a team of front-end developers to build a baby development tracker called Marble using Artificial Intelligence. He collaborated with a team of backend developers, data analysts, designers, and business management. \n\nThe Marble app is a novel tool for new parents to use to track their baby’s development in-between doctor visits. The app gives parents of newborn infants many advantages, including: tracking for feedings, sleeping, diapers, and growth across all developmental milestones: physical, gross motor, communication, cognitive, social, and emotional.\n\nDue to Covid complications, this application is no longer available on the app stores.',
		// link: 'https://play.google.com/store/apps/details?id=ai.mymarble.marble&hl=en_CA&gl=US',
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
		link: 'https://rks-web.vercel.app/',
		techStack: ['React', 'NextJS', 'TypeScript', 'AWS', 'Vercel', 'JavaScript'],
	},
	{
		label: 'Film Maker Personal Portfolio',
		imagesArray: PROJECT_PATHS.Sumathy_Portfolio,
		description:
			'Keshopan is currently working in developing a personal portfolio for a client within the Film Industry. This is a freelance project. The application is built in NextJS. Project is in early stages of development and more details will be included shortly.',
		link: 'https://karupy-sumathy.vercel.app/',
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
