import enhance from '@enhance/enhance';

enhance('theme-button', {
	init(el) {
		el.form = el.querySelector('form');

		el.spinner = document.createElement('span');
		el.spinner.textContent = 'Loading...';

		el.form.addEventListener('submit', async (event) => {
			event.preventDefault();
			try {
				el.form.append(el.spinner);

				const response = await fetch(el.form.action, {
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
				el.spinner.remove();
			}
		});
	},
	render({ html }) {
		return html`
			<form action="/switch-theme" method="POST">
				<button>Change theme</button>
			</form>
		`;
	},
});
