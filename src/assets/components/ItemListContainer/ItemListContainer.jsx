import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import { useParams } from "react-router-dom";
import {
  getProducts,
  filterProductsByCategory,
} from "../../../Firebase/firebase.js";
import Loader from "../loader.jsx";

export default function ItemListContainer() {
  const [myProds, setMyProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      filterProductsByCategory(categoryId).then((products) => {setMyProds(products);setLoading(false)});
      
    } else {
      getProducts().then((products) => {setMyProds(products);setLoading(false)});
      
    }
  }, [categoryId]);
  return (
    <>
      {loading ? (<Loader/>):(
        myProds && (
          <section className="ListContainer">
            {myProds.map((product) => (
              <CardComponent key={product.intID} product={product} />
            ))}
          </section>
        )
      )}
    </>
  );
}
