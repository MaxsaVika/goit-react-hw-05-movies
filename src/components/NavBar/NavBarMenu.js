import { NavLink } from 'react-router-dom';
import { navItems } from './navBarItems';
import css from './NavBar.module.scss';

const getClassName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : `${css.link}`;
};

export default function NavBarMenu() {
  const elements = navItems.map(({ id, to, text }) => {
    return (
      <li key={id} className={css.nav_list_item}>
        <NavLink to={to} className={getClassName} end>
          {text}
        </NavLink>
      </li>
    );
  });
  return <ul className={css.menu}>{elements}</ul>;
}
