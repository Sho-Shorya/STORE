import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ProductProvider from './Context/ProductProvider.jsx'
// localStorage.clear()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
          <App />
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
)
