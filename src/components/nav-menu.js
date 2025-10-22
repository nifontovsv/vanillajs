import { router } from '../router.js'

// Навигационное меню
class NavMenu extends HTMLElement {
	#unsubscribe = null
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}

	connectedCallback() {
		this.render()

		// Подписываемся на изменения маршрута
		this.#unsubscribe = router.currentRoute.subscribe(() => {
			this.updateActiveLink()
		})
	}

	disconnectedCallback() {
		// Отписываемся
		if (this.#unsubscribe) {
			this.#unsubscribe()
		}
	}

	render() {
		const links = [
			{ path: '/', icon: '🏠', label: 'Главная' },
			{ path: '/about', icon: 'ℹ️', label: 'О проекте' },
			{ path: '/contacts', icon: '📞', label: 'Контакты' },
			{ path: '/services', icon: '🛠️', label: 'Услуги' },
		]

		this.shadowRoot.innerHTML = `
        <style>
          :host {
              display: block;
              padding: 24px;
              color: white;
          }
          
          .title {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 32px;
              text-align: center;
              background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
          }
          
          .nav-list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 8px;
          }

          .nav-link {
              display: block;
              padding: 12px 16px;
              color: rgba(255, 255, 255, 0.8);
              text-decoration: none;
              border-radius: 8px;
              transition: all 0.2s ease;
              border-left: 4px solid transparent;
          }
          
          .nav-link:hover {
              background: rgba(255, 255, 255, 0.1);
              color: white;
          }
          
          .nav-link.active {
              background: rgba(59, 130, 246, 0.2);
              font-weight: 600;
              border-left-color: #3b82f6;
              color: white;
          }
      </style>

      <h2 class="title">🧭 Навигация</h2>
      <ul class="nav-list">
          ${links
						.map(
							(link) => `
              <li>
                  <a href="${link.path}" 
                      class="nav-link" 
                      data-path="${link.path}">
                      ${link.icon} ${link.label}
                  </a>
              </li>
          `
						)
						.join('')}
      </ul>
    `

		this.updateActiveLink()
		this.attachEventListeners()
	}

	attachEventListeners() {
		// Перехватываем клики по ссылкам внутри Shadow DOM
		this.shadowRoot.addEventListener('click', (e) => {
			const link = e.target.closest('.nav-link')
			if (!link) return

			e.preventDefault()
			const path = link.getAttribute('data-path')

			// Программно вызываем навигацию
			router.navigate(path)
		})
	}

	updateActiveLink() {
		const currentPath = window.location.pathname
		const links = this.shadowRoot.querySelectorAll('.nav-link')

		links.forEach((link) => {
			const path = link.getAttribute('data-path')
			link.classList.toggle('active', path === currentPath)
		})
	}
}

customElements.define('nav-menu', NavMenu)
