import React from 'react'
import { createContext, useEffect, useState } from 'react'
import { fetching } from '../utilities/api-fetch'

export const ProductsContext = createContext(null)



export default function Context({ children }) {

    useEffect(() => {
        const allProducts = async () => {
            const data = await fetching()
            setData(data)
            return data
        }
        allProducts()
    }, [])

    const [data, setData] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [itemAmountToAdd, setItemAmountToAdd] = useState(1)
    const [cartItems, setCartItems] = useState([])


    function addToCart(newItem, amount) {

        const oldItemIndex = cartItems.findIndex((item) => item.id === newItem.id)

        if (oldItemIndex === -1) {
            setCartItems(prevItems => [...prevItems, { ...newItem, amount }])
        } else {

            setCartItems((prevItems) => {
                const updatedItems = [...prevItems];
                updatedItems[oldItemIndex] = { ...newItem, amount: updatedItems[oldItemIndex].amount + amount };
                return updatedItems;
            });
        }
        setIsCartOpen(true)
    }

    function removeFromCart(id) {
        let filteredItems = cartItems.filter(item => item.id !== id)
        setCartItems(filteredItems)
    }

    return (
        <ProductsContext.Provider
            value={{
                data,
                isCartOpen,
                setIsCartOpen,
                itemAmountToAdd,
                setItemAmountToAdd,
                cartItems,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

