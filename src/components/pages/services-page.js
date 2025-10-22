/**
 * Страница услуг
 */
class ServicesPage extends HTMLElement {
	connectedCallback() {
		this.render()
	}

	render() {
		const services = [
			{
				icon: '💻',
				title: 'Веб-разработка',
				description:
					'Создание современных веб-приложений на последних технологиях',
				features: ['SPA приложения', 'PWA', 'Адаптивный дизайн'],
				color: 'blue',
			},
			{
				icon: '📱',
				title: 'Мобильные приложения',
				description:
					'Разработка нативных и кроссплатформенных мобильных приложений',
				features: ['iOS', 'Android', 'React Native'],
				color: 'green',
			},
			{
				icon: '🎨',
				title: 'UI/UX Дизайн',
				description:
					'Проектирование интуитивных и красивых пользовательских интерфейсов',
				features: ['Прототипирование', 'Дизайн-системы', 'User research'],
				color: 'purple',
			},
			{
				icon: '🚀',
				title: 'Оптимизация',
				description:
					'Повышение производительности и скорости загрузки приложений',
				features: ['Аудит производительности', 'SEO', 'Core Web Vitals'],
				color: 'orange',
			},
			{
				icon: '☁️',
				title: 'Облачные решения',
				description: 'Разработка и развёртывание облачных приложений',
				features: ['AWS', 'Azure', 'Google Cloud'],
				color: 'sky',
			},
			{
				icon: '🔒',
				title: 'Безопасность',
				description: 'Аудит безопасности и защита веб-приложений',
				features: ['Penetration testing', 'OWASP', 'Шифрование'],
				color: 'red',
			},
		]

		this.innerHTML = `
            <div class="max-w-6xl mx-auto">
                <h1 class="text-5xl font-bold text-gray-900 mb-4">
                    🛠️ Наши услуги
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    Полный спектр услуг для вашего цифрового успеха
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${services
											.map(
												(service) => `
                        <div class="service-card bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                            <div class="text-5xl mb-4">${service.icon}</div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-3">
                                ${service.title}
                            </h3>
                            <p class="text-gray-600 mb-4">
                                ${service.description}
                            </p>
                            <div class="space-y-2 mb-4">
                                ${service.features
																	.map(
																		(feature) => `
                                    <div class="flex items-center text-sm text-gray-700">
                                        <span class="mr-2">✓</span>
                                        <span>${feature}</span>
                                    </div>
                                `
																	)
																	.join('')}
                            </div>
                            <button class="w-full px-4 py-2 bg-gradient-to-r from-${
															service.color
														}-500 to-${
													service.color
												}-600 text-white rounded-lg hover:from-${
													service.color
												}-600 hover:to-${service.color}-700 transition-all">
                                Подробнее
                            </button>
                        </div>
                    `
											)
											.join('')}
                </div>
                
                <div class="mt-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-2xl p-8 text-white text-center">
                    <h2 class="text-3xl font-bold mb-4">
                        🎯 Готовы начать проект?
                    </h2>
                    <p class="text-lg mb-6 text-white/90">
                        Свяжитесь с нами для обсуждения вашей идеи
                    </p>
                    <button 
                        onclick="router.navigate('/contacts')"
                        class="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
                        📞 Связаться с нами
                    </button>
                </div>
            </div>
        `
	}
}

customElements.define('services-page', ServicesPage)
