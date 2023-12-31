import { GALLERY_IMAGES } from '../../utils/galleryImagePaths';
import Image from 'next/image';
import React from 'react';

const Gallery = () => {
	return (
		<div className='px-16 lg:max-w-[1980px] mx-auto'>
			<p className='text-4xl my-8 lg:mb-8'>Gallery</p>

			<p className='mb-8'>City Life</p>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
				{GALLERY_IMAGES?.montreal?.map((image, index) => {
					return (
						<Image
							key={index}
							alt='Keshopan Chelvan'
							src={image}
							className='transition-all duration-300 ease-in-out hover:scale-125 hover:rounded-lg'
						/>
					);
				})}
			</div>
			<p className='mb-16'>Coming Soon.</p>
		</div>
	);
};

export default Gallery;
