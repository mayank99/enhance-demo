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
		const sun = `<svg data-icon="sun" width="32" height="32" viewBox="0 0 16 16" fill="currentColor"><path d="M8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>`;
		const moon = `<svg data-icon="moon" width="32" height="32" viewBox="0 0 256 256" fill="currentColor"> <path d="M222.4 150.9a6.1 6.1 0 0 0-5.7-4.3h-.1l-1.7.3A86 86 0 0 1 109.1 41.1a6.8 6.8 0 0 0 .2-1.4a5.8 5.8 0 0 0-3.7-5.9a6.1 6.1 0 0 0-4-.2a98 98 0 1 0 120.8 120.7a6.5 6.5 0 0 0 0-3.4ZM128 214A86 86 0 0 1 95.2 48.5a98.1 98.1 0 0 0 112.3 112.3A86.1 86.1 0 0 1 128 214Z" /> </svg>`;
		return html`
			<form action="/switch-theme" method="POST">
				<button aria-label="Change theme">${moon}${sun}</button>
			</form>
		`;
	},
});
