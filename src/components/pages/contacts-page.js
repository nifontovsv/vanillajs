/**
 * Страница контактов
 */
class ContactsPage extends HTMLElement {
	connectedCallback() {
		this.render()
		this.attachEventListeners()
	}

	render() {
		const contacts = [
			{
				icon: '📧',
				label: 'Email',
				value: 'contact@example.com',
				link: 'mailto:contact@example.com',
				color: 'blue',
			},
			{
				icon: '📱',
				label: 'Телефон',
				value: '+7 (999) 123-45-67',
				link: 'tel:+79991234567',
				color: 'green',
			},
			{
				icon: '💬',
				label: 'Telegram',
				value: '@example',
				link: 'https://t.me/example',
				color: 'sky',
			},
			{
				icon: '📍',
				label: 'Адрес',
				value: 'г. Москва, ул. Примерная, д. 1',
				link: '#',
				color: 'red',
			},
		]

		this.innerHTML = `
            <div class="max-w-4xl mx-auto">
                <h1 class="text-5xl font-bold text-gray-900 mb-6">
                    📞 Контакты
                </h1>
                
                <div class="bg-white rounded-xl shadow-lg p-8 mb-6">
                    <p class="text-lg text-gray-600 mb-6">
                        Свяжитесь с нами любым удобным способом. Мы всегда рады 
                        ответить на ваши вопросы!
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${contacts
													.map(
														(contact) => `
                            <a href="${contact.link}" 
                               class="contact-card flex items-start space-x-4 p-6 bg-gradient-to-br from-${contact.color}-50 to-${contact.color}-100 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                                <span class="text-4xl">${contact.icon}</span>
                                <div>
                                    <h3 class="font-bold text-gray-800 text-lg mb-1">
                                        ${contact.label}
                                    </h3>
                                    <p class="text-${contact.color}-700 font-medium">
                                        ${contact.value}
                                    </p>
                                </div>
                            </a>
                        `
													)
													.join('')}
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
                    <h2 class="text-2xl font-bold mb-4">
                        ✉️ Отправить сообщение
                    </h2>
                    
                    <form class="contact-form space-y-4">
                        <div>
                            <label class="block text-sm font-semibold mb-2">
                                Ваше имя
                            </label>
                            <input 
                                type="text" 
                                name="name"
                                class="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                placeholder="Иван Иванов"
                                required
                            />
                        </div>
                        
                        <div>
                            <label class="block text-sm font-semibold mb-2">
                                Email
                            </label>
                            <input 
                                type="email"
                                name="email" 
                                class="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                placeholder="ivan@example.com"
                                required
                            />
                        </div>
                        
                        <div>
                            <label class="block text-sm font-semibold mb-2">
                                Сообщение
                            </label>
                            <textarea 
                                name="message"
                                rows="4"
                                class="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                                placeholder="Ваше сообщение..."
                                required
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit"
                            class="w-full px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                            🚀 Отправить
                        </button>
                    </form>
                </div>
            </div>
        `
	}

	attachEventListeners() {
		const form = this.querySelector('.contact-form')

		form?.addEventListener('submit', (e) => {
			e.preventDefault()

			const formData = new FormData(form)
			const data = Object.fromEntries(formData)

			console.log('📧 Отправка формы:', data)

			// Имитация отправки
			alert(`✅ Спасибо, ${data.name}! Ваше сообщение отправлено.`)
			form.reset()
		})
	}
}

customElements.define('contacts-page', ContactsPage)
