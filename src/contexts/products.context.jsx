import { createContext, useState } from 'react'

import PRODUCTS from '../shop-data.json'

export const ProductContext = createContext({
  product: [],
  setProducts: () => null
})

export const ProductsProvider = ({ Children }) => {
  const [products, setProducts] = useState(PRODUCTS)
  const value = { products, setProducts }

  return (
    <ProductContext.Provider value={value}>{Children}</ProductContext.Provider>
  )
}
