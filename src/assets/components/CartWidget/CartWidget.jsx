import { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../../Context/CartContext';

export default function CartWidget() {

  const [cart] = useContext(CartContext);

    return (
    <>
      <span className='cart'><img src="/cart3.svg" alt="" /><h2>{cart.length}</h2></span>
      
    </>
  );
}