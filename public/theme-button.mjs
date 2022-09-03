class ThemeButton extends HTMLElement {
	constructor() {
		super();
		this.form = this.querySelector('form');
		this.form.addEventListener('submit', this.onSubmit.bind(this));

		this.spinner = document.createElement('span');
		this.spinner.textContent = 'Loading...';
	}

	async onSubmit(event) {
		event.preventDefault();
		try {
			this.form.append(this.spinner);

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
			this.spinner.remove();
		}
	}
}

customElements.define('theme-button', ThemeButton);
