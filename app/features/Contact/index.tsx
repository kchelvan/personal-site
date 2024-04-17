'use client';

import React, { useState } from 'react';
import Button from '@/app/components/ui/Button';
import TextInput from '@/app/components/ui/TextInput';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { errorNotification, successNotification } from '@/app/utils/toast';
import { initialValues } from './types';

const Contact = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={Yup.object().shape({
				name: Yup.string().required('Required Field'),
				email: Yup.string().required('Required Field'),
				message: Yup.string().required('Required Field'),
			})}
			onSubmit={async (values) => {
				const res = await fetch('/api/email', {
					method: 'POST',
					body: JSON.stringify(values),
				});

				if (res.status == 200) {
					successNotification('Message Sent');
				} else {
					errorNotification('Message Failed!');
				}
			}}
		>
			{({ values, setFieldValue, handleSubmit, errors }: any) => {
				return (
					<Form>
						<div className='px-16 mx-auto lg:max-w-[1600px] py-16'>
							<p
								id='contact'
								className='select-none text-5xl my-8 text-[#928b7b]'
							>
								contact.
							</p>
							<div className='grid grid-cols-2 gap-4 mb-4'>
								<TextInput
									label=''
									id='name'
									placeholder='Your name'
									setFieldValue={setFieldValue}
									errorMessage={isSubmitted && errors?.name}
								/>
								<TextInput
									label=''
									id='email'
									placeholder='Your email'
									setFieldValue={setFieldValue}
									errorMessage={isSubmitted && errors?.email}
								/>
							</div>
							<TextInput
								label=''
								id='message'
								placeholder='Your message'
								multiline
								setFieldValue={setFieldValue}
								errorMessage={isSubmitted && errors?.message}
							/>
							<div className='w-1/2 mx-auto mt-8'>
								<Button
									label='Send Message'
									onClick={() => {
										setIsSubmitted(true);
										handleSubmit(values);
									}}
								/>
							</div>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
};

export default Contact;
