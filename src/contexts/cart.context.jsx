import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItems = existingCartItem(cartItems, productToAdd)

  // if found, increment quantity
  if (existingCartItems) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  // return new array with modify cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
  // find if cartItems contains productToRemove
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  )

  // if quantity is equal to 1, remove that item
  if (existingCartItems.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) => cartItem.id === productToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  )
}

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
}

const existingCartItem = (cartItems, item) => {
  return cartItems.find(
    (cartItem) => cartItem.id === item.id
  )
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemToCart: () => {},
  cartCount: 0,
  totalToPay: 0
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [totalToPay, setTotalToPay] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newTotalToPay = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
    setTotalToPay(newTotalToPay)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const clearItemToCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear))
  }

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  const value = { isCartOpen, toggleIsCartOpen, addItemToCart, removeItemToCart, clearItemToCart, cartItems, cartCount, totalToPay }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
