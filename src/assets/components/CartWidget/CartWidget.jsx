import { useContext, useState } from "react";
import "./CartWidget.css";
import { CartContext } from "../../../Context/CartContext";
import { NavLink } from "react-router-dom";

export default function CartWidget() {
  const [cart] = useContext(CartContext);
  const totalQty = cart.reduce((acumulado, item) => acumulado + item.qty, 0);

  return (
    <>
      <NavLink to={"/cart"}>
        <span className="cart">
          <img src="/cart3.svg" alt="" />
          <h2>{totalQty}</h2>
        </span>
      </NavLink>
    </>
  );
}
