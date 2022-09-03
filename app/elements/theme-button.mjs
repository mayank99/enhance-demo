import enhance from '@enhance/enhance';

export default function ThemeButton({ html }) {
	return html`<form action="/switch-theme" method="POST">
			<button>Change theme</button>
		</form>
    <script type="module" src=/_static/bundles/theme-button.mjs></script>`;
}
