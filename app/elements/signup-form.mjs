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
						this.form.addEventListener('submit', async (event) => {
							event.preventDefault();
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
								this.form.appendChild(
									document.createTextNode('Sign up was successful!')
								);
							}
						});
					}
				}
			);
		</script>
	`;
}
