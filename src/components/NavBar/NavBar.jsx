import { NavLink } from 'react-router-dom';
import css from './NavBar.module.scss';

export default function NavBar() {

  const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`;
  };

    return (
      <header>
        <nav>
         <ul className={css.menu}>
          <li className={css.nav_list_item}>
            <NavLink to="/" className={getClassName} end>Home</NavLink>
          </li>
          <li className={css.nav_list_item}>
            <NavLink to="/movies" className={getClassName}>Movies</NavLink>
          </li>
         </ul>
        </nav>
      </header>    
    )
  }