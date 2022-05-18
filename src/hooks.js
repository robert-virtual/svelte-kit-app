import * as cookie from 'cookie';

export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userId = cookies['userid'];
	const response = await resolve(event);
	return response;
};

export const getSession = ({ locals }) => {
	return {
		userId: locals.userId
	};
};
