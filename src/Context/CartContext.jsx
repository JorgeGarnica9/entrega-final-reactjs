import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart((prevCart) => {
            // Verifico si el artículo ya está en el carrito
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            
            if (existingItem) {
                // Si existe, incremento la cantidad
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, qty: cartItem.qty + 1 } // Aumento qty
                        : cartItem // Mantengo el resto de los artículos
                );
            } else {
                // Si no existe, lo agrego con qty inicial en 1
                return [...prevCart, { ...item, qty: 1 }];
            }
        });
    };

    return(
    <CartContext.Provider value = {[cart, setCart, addItem]}>
        {children}
    </CartContext.Provider>
    )
}