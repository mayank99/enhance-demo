export default function ThemeButton({ html }) {
	return html`<form action="/switch-theme" method="POST">
			<button>Change theme</button>
		</form>
		<script type="module" src="/_static/theme-button.mjs"></script>`;
}
