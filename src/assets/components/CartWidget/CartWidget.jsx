import { useContext, useState } from "react";
import "./CartWidget.css";
import { CartContext } from "../../../Context/CartContext";
import { NavLink } from "react-router-dom";

export default function CartWidget() {
  const [,,,,,totalQty] = useContext(CartContext);

  if(totalQty !== 0){
    return (
      <>
        <NavLink to={"/cart"}>
          <span className="cart">
            <img src="/cart3.svg" alt="" />
            <h2>{totalQty}</h2>
          </span>
        </NavLink>
      </>
    );}else{
      return (
        <>
          <NavLink to={"/cart"}>
            <span className="cart">
              <img src="/cart3.svg" alt="" />
            </span>
          </NavLink>
        </>
    )}
}
