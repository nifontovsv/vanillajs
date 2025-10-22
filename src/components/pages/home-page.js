/**
 * Главная страница
 */
class HomePage extends HTMLElement {
	connectedCallback() {
		this.render()
	}

	render() {
		this.innerHTML = `
            <div class="max-w-5xl mx-auto">
                <div class="mb-8">
                    <h1 class="text-5xl font-bold text-gray-900 mb-4">
                        🏠 Добро пожаловать!
                    </h1>
                    <p class="text-xl text-gray-600">
                        Современный роутер на чистом JavaScript 2025
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div class="text-4xl mb-4">⚡</div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">
                            Молниеносно быстро
                        </h3>
                        <p class="text-gray-600">
                            Нативные Web API без тяжёлых фреймворков. 
                            Мгновенная загрузка и навигация.
                        </p>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div class="text-4xl mb-4">🎨</div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">
                            Современный дизайн
                        </h3>
                        <p class="text-gray-600">
                            Красивый UI с Tailwind CSS и плавные анимации 
                            с View Transitions API.
                        </p>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div class="text-4xl mb-4">🧩</div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">
                            Web Components
                        </h3>
                        <p class="text-gray-600">
                            Переиспользуемые компоненты с инкапсуляцией 
                            через Shadow DOM.
                        </p>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div class="text-4xl mb-4">🔄</div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">
                            Реактивность
                        </h3>
                        <p class="text-gray-600">
                            Signals для реактивного состояния, как в 
                            современных фреймворках.
                        </p>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
                    <h3 class="text-2xl font-bold mb-4">
                        ✨ Технологический стек 2025
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div class="bg-white/10 rounded-lg p-4 backdrop-blur">
                            <div class="font-semibold">Navigation API</div>
                            <div class="text-sm text-blue-100">Роутинг</div>
                        </div>
                        <div class="bg-white/10 rounded-lg p-4 backdrop-blur">
                            <div class="font-semibold">Web Components</div>
                            <div class="text-sm text-blue-100">Компоненты</div>
                        </div>
                        <div class="bg-white/10 rounded-lg p-4 backdrop-blur">
                            <div class="font-semibold">View Transitions</div>
                            <div class="text-sm text-blue-100">Анимации</div>
                        </div>
                        <div class="bg-white/10 rounded-lg p-4 backdrop-blur">
                            <div class="font-semibold">ES Modules</div>
                            <div class="text-sm text-blue-100">Модульность</div>
                        </div>
                        <div class="bg-white/10 rounded-lg p-4 backdrop-blur">
                            <div class="font-semibold">Signals</div>
                            <div class="text-sm text-blue-100">Реактивность</div>
                        </div>
                        <div class="bg-white/10 rounded-lg p-4 backdrop-blur">
                            <div class="font-semibold">Shadow DOM</div>
                            <div class="text-sm text-blue-100">Инкапсуляция</div>
                        </div>
                    </div>
                </div>
            </div>
        `
	}
}

customElements.define('home-page', HomePage)
