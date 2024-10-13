import { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../../Context/CartContext';
import { NavLink } from 'react-router-dom';

export default function CartWidget() {

  const [cart] = useContext(CartContext);

    return (
    <>
 
      <NavLink to={'/cart'}>
      <span className='cart'><img src="/cart3.svg" alt="" /><h2>{cart.length}</h2></span>
      </NavLink>
    </>
  );
}