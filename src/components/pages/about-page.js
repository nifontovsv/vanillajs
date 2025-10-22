/**
 * Страница "О проекте"
 */
class AboutPage extends HTMLElement {
	connectedCallback() {
		const data = this.data || {}
		this.render(data)
	}

	render(data) {
		this.innerHTML = `
            <div class="max-w-4xl mx-auto">
                <h1 class="text-5xl font-bold text-gray-900 mb-6">
                    ℹ️ О проекте
                </h1>
                
                <div class="bg-white rounded-xl shadow-lg p-8 mb-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">
                        Что это?
                    </h2>
                    <p class="text-lg text-gray-600 mb-4">
                        Это демонстрация самых современных подходов к созданию 
                        Single Page Applications на чистом JavaScript без использования 
                        фреймворков типа React, Vue или Angular.
                    </p>
                    <p class="text-lg text-gray-600">
                        Проект показывает, что нативные Web API в 2025 году настолько 
                        мощные, что позволяют создавать сложные приложения без 
                        дополнительных зависимостей.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow-lg p-8 text-white">
                        <div class="text-4xl mb-3">🎯</div>
                        <h3 class="text-2xl font-bold mb-3">Цель</h3>
                        <p class="text-purple-100">
                            Показать возможности современного JavaScript и научить 
                            создавать приложения без фреймворков.
                        </p>
                    </div>
                    
                    <div class="bg-gradient-to-br from-green-500 to-green-700 rounded-xl shadow-lg p-8 text-white">
                        <div class="text-4xl mb-3">💡</div>
                        <h3 class="text-2xl font-bold mb-3">Философия</h3>
                        <p class="text-green-100">
                            Использование стандартов Web Platform вместо 
                            проприетарных решений фреймворков.
                        </p>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <h2 class="text-2xl font-bold text-gray-800 mb-6">
                        📚 Используемые технологии
                    </h2>
                    
                    <div class="space-y-4">
                        <div class="border-l-4 border-blue-500 pl-4">
                            <h4 class="font-bold text-gray-800 mb-1">
                                Navigation API
                            </h4>
                            <p class="text-gray-600">
                                Новейший стандарт для роутинга, заменяющий History API. 
                                Поддержка async/await, автоматическая обработка навигации.
                            </p>
                        </div>
                        
                        <div class="border-l-4 border-purple-500 pl-4">
                            <h4 class="font-bold text-gray-800 mb-1">
                                Web Components
                            </h4>
                            <p class="text-gray-600">
                                Нативные переиспользуемые компоненты с Shadow DOM 
                                для инкапсуляции стилей и логики.
                            </p>
                        </div>
                        
                        <div class="border-l-4 border-green-500 pl-4">
                            <h4 class="font-bold text-gray-800 mb-1">
                                View Transitions API
                            </h4>
                            <p class="text-gray-600">
                                Плавные анимации переходов между страницами, как в 
                                нативных мобильных приложениях.
                            </p>
                        </div>
                        
                        <div class="border-l-4 border-orange-500 pl-4">
                            <h4 class="font-bold text-gray-800 mb-1">
                                Reactive Signals
                            </h4>
                            <p class="text-gray-600">
                                Реактивное состояние на чистом JS, похожее на 
                                Solid.js или Vue 3 Composition API.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `
	}
}

customElements.define('about-page', AboutPage)
