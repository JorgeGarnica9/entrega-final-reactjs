import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


export default function NavBar() {

    return (
    <>
        <header className="header">
      {/* logo de la marca */}
      <NavLink to={'/'} className="logo-container"><div >
        JG/GAMES
      </div></NavLink>

      {/* links de navegación */}
      <nav>
        <ul className="nav-container">
          <li>
            <NavLink to={'category/Games'} ><Button category='JUEGOS'/></NavLink>
          </li>
          <li>
            <NavLink to={'category/Accesories'}><Button category='ACCESORIOS'/></NavLink>
          </li>
          <li>
            <NavLink to={'category/Shirts'}><Button category='REMERAS'/></NavLink>
          </li>
          <li>
            <NavLink to={'/category/Consoles'}><Button category='CONSOLAS'/></NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget/>

    </header>
    </>
  );
}