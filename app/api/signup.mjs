export async function post(req) {
	const { name, email } = req.body;
	console.log(name, email);

	// ... simulate delay from saving in database
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return {
		location: '/signup',
	};
}
