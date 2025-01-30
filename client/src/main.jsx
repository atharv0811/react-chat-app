import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/theme-provider'
import { Toaster } from './components/ui/sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme='light' storageKey="vite-ui-theme">
      <Toaster />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
