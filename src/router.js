import { Signal } from './utils/signal.js'

// Современный роутер на Navigation API
// С поддержкой fallback для старых браузеров
// Middleware и guards
// View Transitions для анимаций
// Async data loading
// Реактивное состояние

class ModernRouter {
	#routes = new Map()
	#middleware = []
	#currentRoute = new Signal(null)
	#isNavigating = new Signal(false)

	constructor() {
		this.#init()
	}

	// Инициализация роутера
	#init() {
		// Проверяем поддержку Navigation API
		if ('navigation' in window) {
			console.log('Navigation API поддерживается')
			this.#initNavigationAPI()
		} else {
			console.warn('Используем Histori API fallback')
			this.#initHistoryAPI()
		}
	}

	// Инициализация через Navigation API (современный)
	#initNavigationAPI() {
		navigation.addEventListener('navigate', (event) => {
			// Игнорируем внешние ссылки на загрузки
			if (
				!event.canIntercept ||
				event.hashChange ||
				event.downloadRequest ||
				event.formData
			) {
				return
			}

			const url = new URL(event.destination.url)

			// Перехватываем навигацию
			event.intercept({
				scroll: 'manual',
				handler: async () => {
					await this.#handleNavigation(url.pathname)
				},
			})
		})

		// Загружаем начальную страницу после готовности DOM
		this.#loadInitialPage()
	}

	// Fallback через History API (для Safari и др.)
	#initHistoryAPI() {
		// Перехватываем клики по ссылкам
		document.addEventListener('click', (e) => {
			const link = e.target.closest('a[href]')
			if (!link) return

			const href = link.getAttribute('href')

			// Только для внутренних ссылок
			if (href.startsWith('/') || href.startsWith('.')) {
				e.preventDefault()
				this.navigate(href)
			}
		})

		// Кнопки назад/вперед
		window.addEventListener('popstate', () => {
			this.#handleNavigation(window.location.pathname)
		})

		// Начальная страница после готовности DOM
		this.#loadInitialPage()
	}

	// Загрузка начальной страницы с ожиданием DOM
	#loadInitialPage() {
		if (document.readyState === 'loading') {
			// DOM ещё загружается - ждём
			document.addEventListener('DOMContentLoaded', () => {
				this.#handleNavigation(window.location.pathname)
			})
		} else {
			// DOM уже готов
			this.#handleNavigation(window.location.pathname)
		}
	}

	// Регистрация маршрута
	route(path, options) {
		this.#routes.set(path, {
			path,
			component: options.component,
			loader: options.loader || null,
			meta: options.meta || {},
			guards: options.guards || [],
		})

		console.log(`Зарегистрирован маршрут: ${path}`)
		return this
	}

	// Добавить middleware
	use(middleware) {
		this.#middleware.push(middleware)
		return this
	}

	// Программная навигация
	async navigate(path, options = {}) {
		if ('navigation' in window) {
			navigation.navigate(path, {
				history: options.replace ? 'replace' : 'auto',
			})
		} else {
			// Fallback
			if (options.replace) {
				window.history.replaceState(null, '', path)
			} else {
				window.history.pushState(null, '', path)
			}
			await this.#handleNavigation(path)
		}
	}

	// Обработка навигации
	async #handleNavigation(path) {
		try {
			this.#isNavigating.value = true

			// Ищем маршрут
			const route = this.#routes.get(path)

			if (!route) {
				console.warn(`Маршрут не найден: ${path}`)
				this.#render404()
				return
			}

			// Выполняем middleware
			for (const mw of this.#middleware) {
				const result = await mw(route)
				if (result === false) {
					console.log('Навигация прервана')
					return
				}
			}

			// Загружаем данные через loader
			let data = {}
			if (route.loader) {
				console.log('Загрузка данных...')
				data = await route.loader()
			}

			// Обновляем текущий маршрут
			this.#currentRoute.value = { ...route, data, path }

			// Рендерим с анимацией
			await this.#transitionToRoute(route, data)

			console.log(`Переход на: ${path}`)
		} catch (error) {
			console.error('Ошибка навигации', error)
			this.#render404()
		} finally {
			this.#isNavigating.value = false
		}
	}

	// Плавный переход с view Transitions API
	async #transitionToRoute(route, data) {
		if (!document.startViewTransition) {
			// Fallback буз анимации
			this.#renderRoute(route, data)
			return
		}

		// с плавной анимацией
		const transition = document.startViewTransition(() => {
			this.#renderRoute(route, data)
		})

		try {
			await transition.finished
		} catch (error) {
			// Игнорируем ошибки анимации
		}
	}

	// Рендер маршрута
	#renderRoute(route, data) {
		const outlet = document.querySelector('router-outlet')

		if (!outlet) {
			console.error('<router-outlet> не найден')
			return
		}

		// Создаём компонент страницы
		const component = document.createElement(route.component)
		component.data = data

		// Заменяем содержимое
		outlet.innerHTML = ''
		outlet.appendChild(component)

		// Скролл вверх
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	// Страница 404
	#render404() {
		const outlet = document.querySelector('router-outlet')

		if (outlet) {
			outlet.innerHTML = `
      <div class="flex items-center justify-center min-h-screen">
        <div class="text-center">
          <h1 class="text-9xl font-bold text-gray-300">404</h1>
          <p class="text-2xl text-gray-700 mt-4 mb-6">Страница не найдена</p>
          <a href="/" class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-block">На главную</a>
        </div>
      </div>
      `
		}
	}

	// Геттеры для реактивного состояния
	get currentRoute() {
		return this.#currentRoute
	}

	get isNavigating() {
		return this.#isNavigating
	}
}

// Экспортируем singleton
export const router = new ModernRouter()
