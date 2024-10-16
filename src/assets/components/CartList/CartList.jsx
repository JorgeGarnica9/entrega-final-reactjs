import './CartList.css';
import { CartContext } from '../../../Context/CartContext';
import { useContext } from 'react';

export default function CartList({product}) {
    const [,,,,removeItem] = useContext(CartContext);
    
    const handleClickRemoveId = () => {
        removeItem(product)
    }
    

    return(<>
    <article className="listedItem">
        <img src={product.image} alt="" />
        <h3>Artículo: {product.name}</h3>
        <h3>Precio: ${product.price}</h3>
        <h3>Cantidad: {product.qty}</h3>
        <h3>Subtotal: ${product.price*product.qty}</h3>
        <span className='removeItem' onClick={handleClickRemoveId} key={product}>X</span>
    </article>
    </>)
}
