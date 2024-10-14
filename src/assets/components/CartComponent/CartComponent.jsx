import { useContext } from 'react';
import './CartComponent.css';
import { CartContext } from '../../../Context/CartContext';
import CartList from '../CartList/CartList';

export default function CartComponent() {
    const [cart] = useContext(CartContext);

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.qty, 0);
    };

    return (<>
        <section className='cartSection'>
            {cart.map(product=> <CartList key={product.id} product={product}/>)}
            <h2>TOTAL A PAGAR: ${getTotalPrice()}</h2>
        </section>
        
    </>)
}