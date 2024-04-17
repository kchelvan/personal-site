import react from '@/public/logo/react.png';
import nextJS from '@/public/logo/nextJs.png';
import tailwind from '@/public/logo/tailwind.png';
import javascript from '@/public/logo/javascript.png';
import typescript from '@/public/logo/typescript.png';
import vercel from '@/public/logo/vercel.png';
import prisma from '@/public/logo/prisma.png';
import salesforce from '@/public/logo/salesforce.png';
import graphql from '@/public/logo/graphql.png';
import aws from '@/public/logo/aws.png';
import firebase from '@/public/logo/firebase.png';

export const SERVICES = [
	'Web Development',
	'Artificial Intelligence',
	'Machine Learning',
	'Deployment',
];

export const TECH_STACK = [
	{ label: 'React', icon: react },
	{ label: 'React Native', icon: null },
	{ label: 'NextJS', icon: nextJS },
	{ label: 'Tailwind CSS', icon: tailwind },
	{ label: 'Javascript', icon: javascript },
	{ label: 'Typescript', icon: typescript },
	{ label: 'Prisma', icon: prisma },
	{ label: 'Vercel', icon: vercel },
	{ label: 'Salesforce', icon: salesforce },
	{ label: 'GraphQL', icon: graphql },
	{ label: 'AWS', icon: aws },
	{ label: 'Firebase', icon: firebase },
];

export type TECH_STACK_TYPE = {
	label: string;
	icon: any;
};
