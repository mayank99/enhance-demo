export default function Card({ html, state }) {
	return html`<style>
			:host {
				display: grid;
				gap: var(--space-xs);
				align-self: start;
				background: var(--background-1);
				border-radius: var(--space-3xs);
				padding: var(--space-s);
				box-shadow: var(--shadow-2);
				border: 1px solid transparent;
			}

			:host > h1,
			h2,
			h3 {
				font-weight: 500;
			}
		</style>
		<slot></slot> `;
}
