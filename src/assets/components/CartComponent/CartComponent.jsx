import { useContext } from 'react';
import './CartComponent.css';
import { CartContext } from '../../../Context/CartContext';
import CartList from '../CartList/CartList';

export default function CartComponent() {
    const [cart] = useContext(CartContext)

    return (<>
        <section className='cartSection'>
            {cart.map(product=> <CartList key={product.id} product={product}/>)}
        </section>
    </>)
}