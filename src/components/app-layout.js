// Главный layout приложения
class AppLayout extends HTMLElement {
	connectedCallback() {
		this.render()
	}

	render() {
		this.innerHTML = `
      <style>
        app-layout {
          display: block;
          height: 100vh;
        }

        .container {
          display: flex;
          height: 100%;
        }

        .sidebar {
          width: 256px;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          box-shadow: 4px 0 12px rgba(0, 0, 0, 0.1);
        }

        .content {
          flex: 1;
          overflow-y: auto;
          background: #f8fafc;
        }
      </style>

      <div class="container">
        <aside class="sidebar">
          <nav-menu></nav-menu>
        </aside>
        <main class="content">
          <router-outlet></router-outlet>
        </main>
      </div>
    `
	}
}

customElements.define('app-layout', AppLayout)
