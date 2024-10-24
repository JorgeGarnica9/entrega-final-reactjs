import { useContext, useState } from "react";
import "./CheckoutComponent.css";
import { useForm } from "react-hook-form";
import { CartContext } from "../../../Context/CartContext";
import { sendOrder } from "../../../Firebase/firebase";
import swal from "sweetalert";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [orderId, setOrderId] = useState();
  const comprar = (data) => {
    const order = {
      buyer: data,
      date: new Date(),
      items: cart,
      total: getTotalPrice(),
    };
    sendOrder(order).then((id) => {
      setOrderId(id);

      // SweetAlert para confirmar la compra exitosa
      swal({
        title: "¡Compra exitosa!",
        text: `Gracias por tu compra, ${order.buyer.nombre}. Tu ID de orden es ${id}. El total es $${order.total}.`,
        icon: "success",
        button: "OK",
      });

      clearCart();
    });
  };

  if (cart.length != 0){
  return (
    <>
      <section className="checkoutSection">
        <h1>FORMULARIO DE COMPRA</h1>
        <div className="FormContainer">
          <p>
            Estás a un paso de completar la compra!! Completa el siguiente
            formulario con tus datos para que podamos generar la orden
            correspondiente.
          </p>
          <form className="Formulario" onSubmit={handleSubmit(comprar)}>
            <input
              type="text"
              placeholder="Ingresá tu nombre"
              {...register("nombre", { required: "El nombre es obligatorio" })}
            />
            {errors.nombre && <p className="error">{errors.nombre.message}</p>}
            <input
              type="email"
              placeholder="Ingresá tu e-mail"
              {...register("email", {
                required: "El e-mail es obligatorio",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Formato de e-mail no válido",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <input
              type="phone"
              placeholder="Ingresá tu número de teléfono"
              {...register("telefono", {
                required: "El número de teléfono es obligatorio",
                minLength: {
                  value: 10,
                  message:
                    "El número de teléfono debe tener al menos 10 dígitos",
                },
              })}
            />
            {errors.telefono && (
              <p className="error">{errors.telefono.message}</p>
            )}
            <li type="submit" className="btnBuy">
            <Button category='COMPRAR'/>
            </li>
            <li><NavLink to='/cart'><Button category='VOLVER'/></NavLink></li>
          </form>
        </div>
      </section>
    </>
  );}else{
    return(<>
      <section className='cartSection'>
          <h1>AUN NO HAS AGREGADO PRODUCTOS A TU CARRITO!!</h1>
          <ul className='btnCart'>
              <li><NavLink to='/'><Button category='SEGUIR COMPRANDO'/></NavLink></li>
          </ul>
      </section>
      </>)
  }
}
