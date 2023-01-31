// fichier javascript de démarage

// Créer l'application
import { createApp } from 'vue'

// Composant du démarage
import App from './App.vue'

// Importer le router et le store
import router from './router'
import store from './store'

// Enchainer les l'utilisation du store, du router 
// et monter l'app
createApp(App).use(store).use(router).mount('#app')
