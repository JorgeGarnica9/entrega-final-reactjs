import './Button.css';

export default function Button({category, isActive}) {

    return (
    <>
        <div className={`btn-back ${isActive ? 'active' : ''}`}>
            <button>{category}</button>
        </div>
        
      
    </>
  );
}