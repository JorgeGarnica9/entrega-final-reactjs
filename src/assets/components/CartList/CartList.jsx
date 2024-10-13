import './CartList.css';

export default function CartList({product}) {


    return(<>
    <article className="listedItem">
        <img src={product.image} alt="" />
        <h3>Nombre: {product.name}</h3>
        <h3>Precio: {product.price}</h3>
        <h3>Cantidad: {product.qty}</h3>
        <h3>Subtotal: </h3>
    </article>
    </>)
}
