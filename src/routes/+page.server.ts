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
			return {
				success: true,
				name
			};
		} catch (error) {
			console.log(error);
		}
	}
} satisfies Actions;
