import './CounterComponent.css';
import { useContext, useState, useEffect } from "react";
import BtnAddToCart from '../Button/BtnAddToCart';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';
import { toast } from 'react-toastify';
import { getSingleProduct } from '../../../Firebase/firebase';

export default function CounterComponent() {
    const [contador, setContador] = useState(1);
    const [product, setProduct] = useState([])
    const {id} = useParams();
    const qty = (contador>1)?'unidades':'unidad';
    const [,,addItem] = useContext(CartContext);
    
    useEffect(() => {
        getSingleProduct(id).then((response) =>
          setProduct(response))
      }, []);
    
    
    
    const handleClickSuma = () => {
        if (contador<product.stock){
        setContador(contador+1)};
    }
    const handleClickResta = () => {       
        if (contador>1){
        setContador(contador-1)};
    }

    const handleClickAddItem = () => {
        addItem(product,contador);
        toast('Producto agregado al carrito')
    }

    return (
    <>
        <div className='counterContainer'>
            <button className='btnCounter' onClick={handleClickResta}>-</button>
            <p>{contador} {qty}</p>
            <button className='btnCounter' onClick={handleClickSuma}>+</button>
            <BtnAddToCart category='Agregar al carrito' onClick={handleClickAddItem}/>
        </div>
    </>
  );
}