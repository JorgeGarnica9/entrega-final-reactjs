import './Button.css';

export default function Button({category}) {

    return (
    <>
        <div className='btn-back'>
            <button className='btn'>{category}</button>
        </div>
        
      
    </>
  );
}