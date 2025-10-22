// Класс для реактивного состояния
// Подписка на изменения
// Приватные поля через #

export class Signal {
	// Приватные поля (# - новый синтаксис JS)
	#value
	#subscribers = new Set()

	constructor(initialValue) {
		this.#value = initialValue
	}

	// Получить значение
	get value() {
		return this.#value
	}

	// Установить значение и уведомить подписчиков
	set value(newValue) {
		if (this.#value !== newValue) {
			this.#value = newValue
			this.#notify()
		}
	}

	// Подписаться на изменения
	subscribe(callback) {
		this.#subscribers.add(callback)

		// Возвращаем всех подписчиков
		return () => this.#subscribers.delete(callback)
	}

	// Уведомить всех подписчиков
	#notify() {
		this.#subscribers.forEach((cb) => cb(this.#value))
	}
}

// Вычисляем значение
export function computed(fn) {
	return new Signal(fn())
}

// Эффект - выполняется при изменениях
export function effect(fn) {
	fn()
}
