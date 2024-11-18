import React from 'react';
import { ProjectHeaderTypes } from './types';
import Link from 'next/link';

interface ProjectBodyProps {
	index: number;
	description?: string;
	techStack: string[];
	link: string;
	label: string;
}

const ProjectHeader = ({ index, label }: ProjectHeaderTypes) => {
	return (
		<p className='text-2xl mt-2 w-full md:mb-4 md:mt-0 md:text-2xl'>
			{label || ''}
		</p>
	);
};

export const ProjectBody = ({
	index,
	description,
	techStack,
	link,
	label,
}: ProjectBodyProps) => {
	return (
		<div
			className={`col-span-1 md:col-span-2 ${
				index % 2 == 0 ? 'md:order-last' : 'md:order-first'
			}`}
		>
			<ProjectHeader index={index} label={label} />
			<div className='h-full flex flex-col justify-between'>
				<div>
					<div>
						<p
							className={`sub-text whitespace-pre-line ${
								techStack?.length > 0 ? 'my-4' : ''
							}`}
						>
							{description || 'Details coming soon!'}
						</p>
					</div>
					{link ? (
						<Link
							href={link || ''}
							target='_blank'
							className='flex flex-row hover:cursor-pointer h-auto mb-4 justify-end'
						>
							<p className={`sub-text underline`}>View Project</p>
						</Link>
					) : null}
					{techStack?.length > 0 ? (
						<div>
							<p className='text-lg mb-3'>Tech Stack.</p>
							<div className='flex flex-row gap-4 mt-2 flex-wrap'>
								{techStack?.map((tech: string) => (
									<div key={tech}>
										<p className='select-none text-base sub-text bg-[#edeae5] w-fit py-1 px-3 rounded-full hover:scale-[120%] transition-all'>
											{tech}
										</p>
									</div>
								))}
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ProjectBody;
