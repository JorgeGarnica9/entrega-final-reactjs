import { useContext, useState } from 'react';
import './CartComponent.css';
import { CartContext } from '../../../Context/CartContext';
import CartList from '../CartList/CartList';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import { sendOrder } from '../../../Firebase/firebase';

export default function CartComponent() {
    const [cart,,,clearCart] = useContext(CartContext);
    //agregado de funcionalidad para generar oredenes de pedido
    const [orderId, setOrderId] = useState(null);

  const handleClickNewOrder = () => {
    const newOrder = {
      buyer: {
        email: 'juan@gmail.com',
        name: 'Juan',
        phone: '+5491167778888',
      },
      date: new Date(),
      items: [
        {
          id: 4,
          title: 'ventilador',
          price: 450,
        },
        {
          id: 7,
          title: 'sabanas',
          price: 190,
        },
      ],
      total: 640,
    };

    sendOrder(newOrder).then((id) => setOrderId(id));
  };
    
    //
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.qty, 0);
    };

    const handleClickClear = () => {
        clearCart();
    }

    if (cart.length == 0) {
        return(<>
        <section className='cartSection'>
            <h1>AUN NO HAS AGREGADO PRODUCTOS A TU CARRITO!!</h1>
            <ul className='btnCart'>
                <li><NavLink to='/'><Button category='SEGUIR COMPRANDO'/></NavLink></li>
            </ul>
        </section>
        </>)

    } else {

    return (<>
        <section className='cartSection'>
            {cart.map(product=> <CartList key={product.intID} product={product}/>)}
            <h2>TOTAL A PAGAR: ${getTotalPrice()}</h2>
            <ul className='btnCart'>
                <li onClick={handleClickNewOrder}><Button  category='FINALIZAR COMPRA'/></li>
                <li onClick={handleClickClear}><Button category='VACIAR CARRITO'/></li>
                <li><NavLink to='/'><Button category='SEGUIR COMPRANDO'/></NavLink></li>
            </ul>
        </section>
    </>)}
}