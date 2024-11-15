const TextInput = ({
	label,
	id,
	multiline,
	containerStyles,
	type,
	required,
	setFieldValue,
	containerType,
	placeholder,
	value,
	errorMessage,
}: {
	label: string;
	id: string;
	multiline?: boolean;
	containerStyles?: any;
	type?: string;
	required?: boolean;
	setFieldValue?: any;
	containerType?: string;
	placeholder?: string;
	value?: string;
	errorMessage?: string;
}) => {
	let textContainerStyle = '';

	switch (containerType) {
		case 'secondary':
			textContainerStyle =
				'font-lexend text-gray-900 text-sm px-4 border-b-2 border-x-0 border-t-0 border-gray-400 bg-transparent outline-none w-full ';
			break;
		case 'primary':
		default:
			textContainerStyle =
				'bg-white border border-gray-300 text-gray-900 text-sm rounded w-full p-4';
	}
	return (
		<div id={id} className={`${containerStyles}`}>
			<div className='flex'>
				<p className='sub-text mb-2 text-base text-black'>{label}</p>
				{required ? (
					<p className='sub-text text-2xl font-medium text-red-600 ml-1 mb-0'>
						*
					</p>
				) : null}
			</div>
			{multiline ? (
				<textarea
					className={`sub-text ${textContainerStyle} mb-0 ${
						errorMessage ? 'border-red-600' : ''
					}`}
					rows={4}
					onChange={(e: any) => {
						setFieldValue(id, e.target.value);
					}}
					style={{ resize: 'none' }}
					placeholder={placeholder}
					value={value}
				/>
			) : (
				<input
					id={id}
					type={type || 'text'}
					className={`sub-text ${textContainerStyle} mb-0 ${
						errorMessage ? 'border-red-600  mb-1' : ''
					}`}
					onChange={(e: any) => {
						setFieldValue(id, e.target.value);
					}}
					placeholder={placeholder}
					value={value}
				/>
			)}
			<p className='sub-text text-xs font-medium text-red-600 ml-1 mb-0'>
				{errorMessage ? errorMessage || 'Required Field' : ''}
			</p>
		</div>
	);
};

export default TextInput;
