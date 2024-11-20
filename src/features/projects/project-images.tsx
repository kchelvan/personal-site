'use client';

import React, { useEffect, useState } from 'react';
import { ProjectImagesTypes } from './types';
import Image from 'next/image';

import ComingSoon from '@/public/images/coming_soon.jpg';

const ProjectImages = (props) => {
	const { index, title, images: imagesArray }: ProjectImagesTypes = props;
	const [imageCounter, setImageCounter] = useState(0);

	const api = () => {
		imagesArray?.length > 0 &&
			setImageCounter((_imageCounter) => {
				if (_imageCounter < imagesArray.length - 1) {
					return _imageCounter + 1;
				} else {
					return 0;
				}
			});
		setTimeout(api, 2000);
	};

	useEffect(() => {
		setTimeout(api, 0 + index * 500);
	}, []);

	return (
		<div className='transition-all ease w-full col-span-1 md:col-span-3'>
			<Image
				alt={`${title} ${imageCounter}`}
				src={imagesArray[imageCounter] || ComingSoon}
				className='rounded-2xl flex overflow-hidden w-full'
				height={512}
				width={100}
				unoptimized
			/>
		</div>
	);
};

export default ProjectImages;
