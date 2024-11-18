'use client';

import React, { useEffect, useState } from 'react';
import { ProjectImagesTypes } from './types';
import Image from 'next/image';

const ProjectImages = ({ index, label, imagesArray }: ProjectImagesTypes) => {
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
				alt={`${label} ${imageCounter}`}
				src={imagesArray[imageCounter]}
				className='rounded-2xl flex overflow-hidden w-full'
				height={512}
				unoptimized
			/>
		</div>
	);
};

export default ProjectImages;
