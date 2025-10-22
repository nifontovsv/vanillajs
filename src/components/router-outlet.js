// Outlet для отображения страниц
class RouterOutlet extends HTMLElement {
	connectedCallback() {
		this.style.display = 'block'
		this.style.padding = '32px'
		this.style.minHeight = '100vh'
	}
}

customElements.define('router-outlet', RouterOutlet)
