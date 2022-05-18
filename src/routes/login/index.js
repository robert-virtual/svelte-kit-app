import * as cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
const prisma = new PrismaClient();

export const post = async ({ locals, request }) => {
	const data = await request.formData();
	const email = data.get('email');
	const password = data.get('password');
	const user = await prisma.user.findUnique({ where: { email } });
	if (!user || !user.password) {
		return {
			status: 303,
			headers: {
				location: '/'
			}
		};
	}
	let valid = await argon2.verify(user.password, password);
	if (!valid) {
		return {
			status: 303,
			headers: {
				location: '/'
			}
		};
	}
	const cookies = cookie.parse(request.headers.get('cookie') || '');
	locals.userId = cookies['userid'] || uuid();
	// const response = await resolve(event);
	if (!cookies['userid']) {
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
	}
	return {};
};
