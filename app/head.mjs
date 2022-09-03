export default function Head(req = {}) {
	const { theme } = req.session;

	return /*html*/ `
	<head>
		<meta charset="utf-8" />
		<title>Meow</title>
		<meta name="color-scheme" content="${theme || 'light dark'}" />
		<link rel="stylesheet" href="/_static/tokens.css" />
	</head>
	`;
}
