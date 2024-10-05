import './BtnAddToCart.css';

export default function BtnAddToCart({category}) {

    return (
    <>
        <div className='btnatc-back'>
            <button className='btn'>{category}</button>
        </div>
    </>
  );
}