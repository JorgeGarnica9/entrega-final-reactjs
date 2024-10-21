import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import { useParams } from "react-router-dom";
import {
  getProducts,
  filterProductsByCategory,
} from "../../../Firebase/firebase.js";

export default function ItemListContainer() {
  const [myProds, setMyProds] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      filterProductsByCategory(categoryId).then((products) => setMyProds(products));
      
    } else {
      getProducts().then((products) => setMyProds(products));
      
    }
  }, [categoryId]);
  return (
    <>
      {
        myProds && (
          <section className="ListContainer">
            {myProds.map((product) => (
              <CardComponent key={product.intID} product={product} />
            ))}
          </section>
        )
      }
    </>
  );
}
