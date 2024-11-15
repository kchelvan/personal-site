import { Resend } from 'resend';
import { EmailTemplate } from '@/components/layout/email';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	const formValues = await request.json();
	try {
		const data = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'keshopan.chelvan@gmail.com',
			subject: 'Portfolio Message: Inquiry',
			react: EmailTemplate({
				name: formValues.name,
				email: formValues.email,
				message: formValues.message,
			}),
		} as any);

		return Response.json(data);
	} catch (error) {
		return Response.json({ error });
	}
}
