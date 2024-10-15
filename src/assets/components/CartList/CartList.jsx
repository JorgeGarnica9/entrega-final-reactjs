import './CartList.css';

export default function CartList({product}) {
    return(<>
    <article className="listedItem">
        <img src={product.image} alt="" />
        <h3>Artículo: {product.name}</h3>
        <h3>Precio: ${product.price}</h3>
        <h3>Cantidad: {product.qty}</h3>
        <h3>Subtotal: ${product.price*product.qty}</h3>
        <span className='removeItem'>X</span>
    </article>
    </>)
}
