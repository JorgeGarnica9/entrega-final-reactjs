import './ItemListContainer.css';
import { getProducts, getCategory } from '../../../data.js';
import { useEffect, useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
    const [products, setProducts]=useState([]);
    const {categoryId} = useParams();
    
    useEffect(()=>{
      if (categoryId){
        const filteredProducts = getCategory(categoryId);
        setProducts(filteredProducts);
      } else {
        getProducts.then(info=>setProducts(info));
      }
    },[categoryId]);
    
    return (
    <>
       <section className='ListContainer'>
          {products.map(product=> <CardComponent key={product.id} product={product}/>)}
       </section>
     </>
  );
}