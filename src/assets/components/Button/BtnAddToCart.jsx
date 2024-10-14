import './BtnAddToCart.css';

export default function BtnAddToCart({category, onClick}) {

    return (
    <>
        <div className='btnatc-back'>
            <button className='btn' onClick={onClick}>{category}</button>
        </div>
    </>
  );
}