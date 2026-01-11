import React, { useContext } from "react"
import {Route, Routes} from 'react-router-dom'
import "./App.css"
import Home from "./pages/Home"
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import ForgotPassword from "./pages/ForgotPassword"
import Cart from "./pages/Cart"
import Recent from "./pages/Recent"
import ProductProvider,{ ProductContext } from "./Context/ProductProvider"

function App() {
  const [products,setProducts,addToCart] = useContext(ProductContext)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} products={products} />}/>
        <Route path="/cart" element={<Cart products={products}/>}/>
        <Route path="/recent" element={<Recent />}/>
        <Route path="/login" element={<UserLogin />}/>
        <Route path="/signup" element={<UserSignup />}/>
        <Route path="/forgotPassword" element={<ForgotPassword />}/>
      </Routes>
    </div>
  )
}

export default App
