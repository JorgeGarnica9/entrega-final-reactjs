import "./ItemDetailsContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CounterComponent from "../CounterComponent/CounterComponent.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getSingleProduct } from "../../../Firebase/firebase.js";

export default function ItemDetailsContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();



  useEffect(() => {
    getSingleProduct(id).then((response) =>
      setProduct(response))
  }, []);

  return (
    <>
      <section className="ItemContainer">
        <article className="DetailsContainer">
          <img src={product.image} alt="" />
          <div className="DetailsText">
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <h3>Categoría del producto: {product.category}</h3>
            <h3>Precio: ${product.price}</h3>
            <h3>Stock disponible: {product.stock}</h3>
            <CounterComponent />
          </div>
        </article>
      </section>
      <ToastContainer/>
    </>
  );
}
