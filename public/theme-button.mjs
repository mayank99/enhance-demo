import enhance from '@enhance/enhance';

enhance('theme-button', {
	init(el) {
		console.log(el);
		el.form = el.querySelector('form');
		el.form.addEventListener('submit', async (event) => {
			event.preventDefault();
			try {
				// el.appendChild();
				const response = await fetch(this.form.action, {
					method: 'POST',
					headers: {
						accept: 'application/json',
					},
				});
				const { theme } = await response.json();
				document.documentElement.setAttribute('data-theme', theme);
				document.head
					.querySelector('meta[name="color-scheme"]')
					.setAttribute('content', theme);
			} catch {
			} finally {
			}
		});
	},
});
