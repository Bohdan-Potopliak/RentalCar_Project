import { NavLink, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className={clsx(s.header, s.whiteBackground, pathname !== '/catalog' && s.withBorder)}>
            <div className={s.container}>
                <div className={s.logo}>
                    Rental<span className={s.logoAccent}>Car</span>
                </div>
                <nav className={s.nav}>
                    <NavLink to="/" className={({ isActive }) => clsx(s.link, isActive && s.active)}>
                        Home
                    </NavLink>
                    <NavLink to="/catalog" className={({ isActive }) => clsx(s.link, isActive && s.active)}>
                        Catalog
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
