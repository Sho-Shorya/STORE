import React, { useContext } from "react"
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from "./pages/Home"
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import ForgotPassword from "./pages/ForgotPassword"
import Cart from "./pages/Cart"
import Recent from "./pages/Recent"
import ProductProvider, { ProductContext } from "./Context/ProductProvider"
import ProtectedRoute from "./Context/ProtectedRoute"

function App() {
  const [products, setProducts, addToCart] = useContext(ProductContext)


  return (
    <div>
      <Routes>
        <Route path="/home" element={
          <ProtectedRoute>
            <Home addToCart={addToCart} products={products} />
          </ProtectedRoute>
        } />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart products={products} />

          </ProtectedRoute>
        } />
        <Route path="/recent" element={
          <ProtectedRoute>
            <Recent />

          </ProtectedRoute>
        } />
        <Route path="/" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  )
}

export default App
