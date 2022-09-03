export default function FormDialog({ html }) {
	return html`
		<style>
			dialog {
				background-color: transparent;
				border: none;
				max-width: min(95%, 400px);
			}
			dialog::backdrop {
				background-color: rgba(0, 0, 0, 0.5);
				backdrop-filter: blur(5px);
			}
		</style>
		<dialog>
			<x-card>
				<slot></slot>
			</x-card>
		</dialog>
	`;
}
