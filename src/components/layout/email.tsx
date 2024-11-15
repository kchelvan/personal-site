import * as React from 'react';

interface EmailTemplateProps {
	name: string;
	email: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	email,
	message,
}) => (
	<div>
		<p>Sent from: {email}</p>
		<h3>{name} says:</h3>
		<p>{message}</p>
	</div>
);
