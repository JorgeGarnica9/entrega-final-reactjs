import { useContext } from 'react';
import { getProduct } from '../../../data';
import './BtnAddToCart.css';
import { CartContext } from '../../../Context/CartContext';
import { useParams } from 'react-router-dom';

export default function BtnAddToCart({category}) {
    const {id} = useParams();
    const product = getProduct(id);
    const [,,addItem] = useContext(CartContext);

    const handleClickAddItem = () => {
        addItem(product);
    }

    return (
    <>
        <div className='btnatc-back'>
            <button className='btn' onClick={handleClickAddItem}>{category}</button>
        </div>
    </>
  );
}