export async function get(req) {
	let theme = req.session.theme || 0;
	return {
		json: { theme },
	};
}
