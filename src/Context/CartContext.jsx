import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({children}){
    const [cart, setCart] = useState([]);
    

    const totalQty = cart.reduce((acumulado, item) => acumulado + item.qty, 0);

    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (item) => {
        const updatedCart = cart.filter(cartItem => cartItem.intID !== item.intID);
        setCart(updatedCart);
        
        
    }

    const addItem = (item, qty) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.intID === item.intID);
            
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.intID === item.intID
                        ? { ...cartItem, qty: cartItem.qty + qty }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, qty: qty }];
            }
        });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.qty, 0);
    };

    return(
    <CartContext.Provider value = {[cart, setCart, addItem, clearCart,removeItem,totalQty, getTotalPrice]}>
        {children}
    </CartContext.Provider>
    )
}