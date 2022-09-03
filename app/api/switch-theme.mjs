export async function post(req) {
	let theme = req.session.theme || 'dark';

	if (theme === 'dark') {
		theme = 'light';
	} else {
		theme = 'dark';
	}

	return {
		session: { theme },
		json: { theme },
		location: '/',
	};
}
