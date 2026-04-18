import App from './App'
import { createSSRApp, ref } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  const isDarkMode = ref(false)
  app.provide('isDarkMode', isDarkMode)
  return {
    app
  }
}
