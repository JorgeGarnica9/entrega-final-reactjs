import './CardComponent.css';
import { Link } from 'react-router-dom';

export default function CardComponent({product}) {

    return (
    <>
        <div className="card">
            <div className="face front">
              <img src={product.image} alt={product.title} />
              <h3>{product.name}</h3>
            </div>
            <div className="face back">
              <h3>{product.name}</h3>
              <p>{product.title}</p>
              <div className="link">
                <Link to={`/item/${product.id}`}>Ver más</Link>
              </div>
            </div>
        </div>
      
    </>
  );
}