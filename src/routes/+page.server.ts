import { error } from '@sveltejs/kit';
import type { Actions } from './$types';
import nodemailer from 'nodemailer';

export const actions = {
	'send-message': async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name')?.toString();
			const email = formData.get('email')?.toString();
			const subject = formData.get('subject')?.toString();
			const content = formData.get('content')?.toString();

			if (!name || !email || !subject || !content) {
				throw error(400, { message: 'all fields are mandatotry' });
			}
			console.log(formData);
			const transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 587,
				auth: {
					user: 'subrathitachi6@gmail.com',
					pass: 'kyfj oswm dtsx odkw'
				}
			});
			const info = await transporter.sendMail({
				from: 'subrathitachi6@gmail.com', // sender address
				to: 'subraths@proton.me', // list of receivers
				subject: 'Message from portfolio', // Subject line
				text: `name: ${name}\n email: ${email}\n subject:${subject}\n ${content}` // plain text body
			});

			console.log('Message sent: %s', info.messageId);
			return {
				success: true,
				data: {
					name: formData.get('name')
				}
			};
		} catch (error) {
			console.log(error);
		}
	}
} satisfies Actions;
