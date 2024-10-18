import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="header">
        <NavLink to={"/"} className="logo-container">
          <div>JG/GAMES</div>
        </NavLink>

        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            <li>
            <NavLink 
                to={"category/Games"} 
                className={({ isActive }) => (isActive ? 'active-link' : '')}>
                {({ isActive }) => <Button category="JUEGOS" isActive={isActive} />}
              </NavLink>
            </li>
            <li>
            <NavLink 
                to={"category/Accesories"} 
                className={({ isActive }) => (isActive ? 'active-link' : '')}>
                {({ isActive }) => <Button category="ACCESORIOS" isActive={isActive} />}
              </NavLink>
            </li>
            <li>
            <NavLink 
                to={"category/Shirts"} 
                className={({ isActive }) => (isActive ? 'active-link' : '')}>
                {({ isActive }) => <Button category="REMERAS" isActive={isActive} />}
              </NavLink>
            </li>
            <li>
            <NavLink 
                to={"/category/Consoles"} 
                className={({ isActive }) => (isActive ? 'active-link' : '')}>
                {({ isActive }) => <Button category="CONSOLAS" isActive={isActive} />}
              </NavLink>
            </li>
          </ul>
        </nav>

        <CartWidget />
      </header>
    </>
  );
}
