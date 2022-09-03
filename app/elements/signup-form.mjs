export default function SignupForm({ html }) {
	return html`
		<form action="/signup" autocomplete="off" method="POST">
			<slot></slot>
		</form>
		<script type="module">
			customElements.define(
				'signup-form',
				class extends HTMLElement {
					constructor() {
						super();
						this.form = this.querySelector('form');
						this.button = this.querySelector('button');

						this.form.addEventListener('submit', async (event) => {
							event.preventDefault();

							try {
								this.button.disabled = true;
								this.button.__originalText = this.button.textContent;
								this.button.textContent = 'Loading...';

								const formData = Object.fromEntries(
									new FormData(event.currentTarget)
								);
								const response = await fetch(this.form.action, {
									method: 'POST',
									body: JSON.stringify(formData),
									headers: {
										'Content-Type': 'application/json',
									},
								});
								if (response.ok) {
									const dialog = document.querySelector('dialog');
									dialog.showModal();
								}
							} catch (error) {
								console.error(error);
							} finally {
								this.form.reset();
								this.button.disabled = false;
								this.button.textContent = this.button.__originalText;
							}
						});
					}
				}
			);
		</script>
	`;
}
