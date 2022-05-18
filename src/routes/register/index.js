import * as cookie from 'cookie';
import argon2 from 'argon2';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const post = async ({ locals, request }) => {
	const data = await request.formData();
	const email = data.get('email');
	const name = data.get('name');
	const passwd = data.get('password');
	let password = await argon2.hash(passwd);
	const user = await prisma.user.create({
		data: {
			email,
			name,
			password
		}
	});

	locals.userId = user.id;
	return {
		status: 303,
		headers: {
			'set-cookie': cookie.serialize('userid', locals.userId, {
				path: '/',
				httpOnly: true
			}),
			location: '/private'
		}
	};
};
