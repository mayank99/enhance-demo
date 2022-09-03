export default function Button({ html, state }) {
	const { attrs = {} } = state;

	const htmlAttrs = Object.entries(attrs)
		.map(([key, value]) => `${key}="${value}"`)
		.join(' ');

	return html` <style>
			:host {
				display: contents;
			}

			button {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: var(--space-xs);
				background-color: var(--background-1);
				border-radius: var(--space-3xs);
				border: 1px solid;
				padding-inline: var(--space-xs);
				padding-block: var(--space-2xs);
				cursor: pointer;
			}
			button:disabled {
				opacity: 0.5;
			}
		</style>
		<button ${htmlAttrs}><slot></slot></button>`;
}
