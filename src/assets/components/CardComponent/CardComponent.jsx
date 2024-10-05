import './CardComponent.css';
import { Link } from 'react-router-dom';

export default function CardComponent({product}) {

    return (
    <>
        <div className="card">
            <div className="face front">
              <img src={product.image} alt="" />
              <h3>{product.name}</h3>
            </div>
            <div className="face back">
              <h3>{product.name}</h3>
              <p>{product.title}</p>
              <div className="link">
                <a href="#"><Link to={`/item/${product.id}`}>Ver más</Link></a>
              </div>
            </div>
        </div>
      
    </>
  );
}