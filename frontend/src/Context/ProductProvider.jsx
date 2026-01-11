import React, { createContext, useEffect, useState } from 'react'
import { setProductLocally, getProductLocally } from "../utils/locatStorage";

export const ProductContext = createContext()

export const addToCart = (itemId,company,type,qty)=>{
  console.log("added");
    
}
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState({})

  useEffect(() => {
    setProductLocally()
    const { products,cartItems } = getProductLocally([]);
    setProducts(products,cartItems)
  }, [])

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>

  )
}

export default ProductProvider;