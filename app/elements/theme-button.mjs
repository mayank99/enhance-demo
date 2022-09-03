import enhance from '@enhance/enhance';

export default function ThemeButton({ html }) {
	return html`<form action="/switch-theme" method="POST">
			<button>Change theme</button>
		</form>
		<script type="module">
			class ThemeButton extends HTMLElement {
				constructor() {
					super();
					this.form = this.querySelector('form');
					this.form.addEventListener('submit', this.onSubmit.bind(this));
				}

				async onSubmit(event) {
					event.preventDefault();
					try {
						this.loading = true;

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
						this.loading = false;
					}
				}
			}

			customElements.define('theme-button', ThemeButton);
		</script>`;
}
