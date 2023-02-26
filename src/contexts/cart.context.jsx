import { createContext, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {}
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  const value = { isCartOpen, toggleIsCartOpen }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
