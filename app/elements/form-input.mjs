export default function Input({ html, state }) {
	const { attrs = {} } = state;

	const htmlAttrs = Object.entries(attrs)
		.map(([key, value]) => `${key}="${value}"`)
		.join(' ');

	return html`<style>
			:host {
				display: contents;
			}

			input {
				background-color: var(--background-2);
				border-radius: var(--space-3xs);
				border: 1px solid var(--background-3);
				padding-inline: var(--space-xs);
				padding-block: var(--space-2xs);
			}

			input:disabled {
				opacity: 0.5;
			}
		</style>
		<input ${htmlAttrs} /> `;
}
