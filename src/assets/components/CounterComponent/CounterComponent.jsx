import './CounterComponent.css';
import { useState } from "react";
import BtnAddToCart from '../Button/BtnAddToCart';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../data';

export default function CounterComponent() {
    const [contador, setContador] = useState(1);
    const {id} = useParams();
    const product = getProduct(id);
    const qty = (contador>1)?'unidades':'unidad';
    
    const handleClickSuma = () => {
        if (contador<product.stock){
        setContador(contador+1)};
    }
    const handleClickResta = () => {
        if (contador>1){
        setContador(contador-1)};
    }
    return (
    <>
        <div className='counterContainer'>
            <button className='btnCounter' onClick={handleClickResta}>-</button>
            <p>{contador} {qty}</p>
            <button className='btnCounter' onClick={handleClickSuma}>+</button>
            <BtnAddToCart category='Agregar al carrito'/>
        </div>
    </>
  );
}