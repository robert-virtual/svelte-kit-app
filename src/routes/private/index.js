import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const get = async ({ locals }) => {
	if (!locals.userId) {
		return {
			headers: {
				location: '/login'
			}
		};
	}
	const user = await prisma.user.findUnique({
		select: {
			name: true,
			email: true,
			id: true
		},
		where: { id: locals.userId }
	});
	return {
		body: {
			user
		}
	};
};
