import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/' className='imgContainer'>
        <img src='/logo.png' alt='Cocktail Lovers' />
      </Link>
      <nav className='linkContainer'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        <NavLink to='/cocktails/random'>Random</NavLink>
      </nav>
    </header>
  );
};

export default Header;
