import Button from '@/app/components/ui/Button';
import TextInput from '@/app/components/ui/TextInput';
import React from 'react';

const Contact = () => {
	return (
		<div className='px-16 mx-auto lg:max-w-[1600px] py-16'>
			<p id='contact' className='text-5xl my-8 text-[#928b7b]'>
				contact.
			</p>
			<div className='grid grid-cols-2 gap-4 mb-4'>
				<TextInput label='' id='name' placeholder='Your name' />
				<TextInput label='' id='email' placeholder='Your email' />
			</div>
			<TextInput label='' id='message' placeholder='Your message' multiline />
			<div className='w-1/2 mx-auto mt-8'>
				<Button label='Send Message' />
			</div>
			<p className='text-lg my-8 text-center'>
				contact form is still in development. Please use socials in footer to
				contact me.
			</p>
		</div>
	);
};

export default Contact;
