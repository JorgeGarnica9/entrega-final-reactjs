import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
    }

    

    const addItem = (item, qty) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, qty: cartItem.qty + qty }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, qty: qty }];
            }
        });
    };

    return(
    <CartContext.Provider value = {[cart, setCart, addItem, clearCart]}>
        {children}
    </CartContext.Provider>
    )
}