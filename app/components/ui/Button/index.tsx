import React from 'react';

const Button = ({
	id,
	label,
	containerStyles,
	labelStyles,
	type,
	onClick,
	thin,
	alignment,
}: {
	id?: 'button' | 'reset' | 'submit' | undefined;
	label: string;
	containerStyles?: string;
	labelStyles?: string;
	type?: string;
	onClick?: any;
	thin?: boolean;
	alignment?: string;
}) => {
	const customTypes: any = {
		hyperlink: 'bg-transparent text-[#1C3553] underline',
		secondaryHyperlink: 'bg-transparent text-[#217097]',
		secondary: 'bg-[#1C3453] text-white hover:bg-[#227097] hover:text-white',
		tertiary: 'bg-[#FFFFFF] text-black hover:bg-[#1C3453] hover:text-white',
		grey: 'bg-[#D1D8D9] text-black hover:bg-[#227097] hover:text-white',
	};
	return (
		<div className={`flex ${alignment || 'justify-center'}`}>
			<button
				type={id || 'button'}
				className={`w-[75%] justify-center ${containerStyles || ''} ${
					alignment || 'items-center'
				}`}
				onClick={onClick}
			>
				<p
					className={`select-none rounded transition sub-text text-sm md:text-lg mb-0 bg-[#928b7b] text-white hover:bg-[#c8c6bc] hover:text-black py-2`}
				>
					{label}
				</p>
			</button>
		</div>
	);
};

export default Button;
