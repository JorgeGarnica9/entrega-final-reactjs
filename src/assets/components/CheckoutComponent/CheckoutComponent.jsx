import { useContext, useState } from "react";
import "./CheckoutComponent.css";
import { useForm } from "react-hook-form";
import { CartContext } from "../../../Context/CartContext";
import { sendOrder } from "../../../Firebase/firebase";
import swal from "sweetalert";

export default function CheckoutComponent() {
  const [
    cart,
    setCart,
    addItem,
    clearCart,
    removeItem,
    totalQty,
    getTotalPrice,
  ] = useContext(CartContext);

  const { register, handleSubmit } = useForm();
  const [orderId, setOrderId] = useState()
  const comprar = (data) => {
    
    const order = {
      buyer: data,
      date: new Date(),
      items: cart,
      total: getTotalPrice(),
    };
    sendOrder(order).then((id) => setOrderId(id));
    
    };
    

  return (
    <>
      <section className="checkoutSection">
        <div className="FormContainer">
          <h1>Formulario de compra</h1>
          <form className="Formulario" onSubmit={handleSubmit(comprar)}>
            <input
              type="text"
              placeholder="Ingresá tu nombre"
              {...register("nombre")}
            />
            <input
              type="email"
              placeholder="Ingresá tu e-mail"
              {...register("email")}
            />
            <input
              type="phone"
              placeholder="Ingresá tu número de teléfono"
              {...register("telefono")}
            />
            <button type="submit" className="btnBuy">
              Confirmar compra
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
