import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const get = async () => {
	const posts = await prisma.post.findMany({
		include: {
			image: true,
			user: true
		}
	});
	return {
		body: {
			posts
		}
	};
};
