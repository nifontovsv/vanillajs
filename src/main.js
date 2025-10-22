/**
 * Главный файл приложения
 * Точка входа - регистрация маршрутов и настройка
 */

import { router } from './router.js'

// Импортируем все компоненты
import './components/app-layout.js'
import './components/nav-menu.js'
import './components/router-outlet.js'

// Импортируем страницы
import './components/pages/home-page.js'
import './components/pages/about-page.js'
import './components/pages/contacts-page.js'
import './components/pages/services-page.js'

/**
 * Регистрация маршрутов
 */
router
	.route('/', {
		component: 'home-page',
		meta: {
			title: 'Главная | Modern Router',
			description: 'Современный роутер на чистом JavaScript',
		},
	})
	.route('/about', {
		component: 'about-page',
		meta: {
			title: 'О проекте | Modern Router',
			description: 'Информация о проекте',
		},
		loader: async () => {
			// Здесь можно загружать данные с API
			// Имитируем задержку
			await new Promise((resolve) => setTimeout(resolve, 300))
			return {
				loaded: true,
				timestamp: new Date().toISOString(),
			}
		},
	})
	.route('/contacts', {
		component: 'contacts-page',
		meta: {
			title: 'Контакты | Modern Router',
			description: 'Свяжитесь с нами',
		},
	})
	.route('/services', {
		component: 'services-page',
		meta: {
			title: 'Услуги | Modern Router',
			description: 'Наши услуги и решения',
		},
	})

/**
 * Middleware для обновления title страницы
 */
router.use(async (route) => {
	if (route.meta.title) {
		document.title = route.meta.title
	}
	return true
})

/**
 * Middleware для логирования
 */
router.use(async (route) => {
	console.log(`📊 Навигация: ${route.path}`)
	console.log(`⏰ Время: ${new Date().toLocaleTimeString()}`)
	return true
})

/**
 * Middleware для аналитики (пример)
 */
router.use(async (route) => {
	// Здесь можно отправлять данные в аналитику
	// analytics.track('pageview', { path: route.path });
	return true
})

// Экспортируем router для использования в других модулях
window.router = router

console.log('✅ Приложение запущено!')
console.log('🚀 Используйте router.navigate("/path") для программной навигации')
