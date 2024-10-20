import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const totalQty = cart.reduce((acumulado, item) => acumulado + item.qty, 0);

    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (item) => {
        const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
        setCart(updatedCart);
    }

    const addItem = (item, qty, id) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === id);
            
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === id
                        ? { ...cartItem, qty: cartItem.qty + qty }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, qty: qty }];
            }
        });
    };

    return(
    <CartContext.Provider value = {[cart, setCart, addItem, clearCart,removeItem,totalQty]}>
        {children}
    </CartContext.Provider>
    )
}