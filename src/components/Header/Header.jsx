import React, { useEffect, useState } from 'react';
import sprite from '../../assets/icons.svg';
import s from './Header.module.css';
import MenuOverlay from '../MenuOverlay/MenuOverlay';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const screenWidth = useScreenWidth();
  const navigate = useNavigate();

  useEffect(() => {
    const elementsToBlur = [
      document.querySelector('main'),
      document.querySelector('footer'),
      document.querySelector(`.${s.headerWrapper}`),
    ];

    const setBlur = (blur) => {
      document.body.style.overflow = blur ? 'hidden' : 'unset';
      elementsToBlur.forEach((el) => {
        if (el) el.style.filter = blur ? 'blur(25px)' : 'none';
      });
    };

    setBlur(navbarOpen);
    return () => setBlur(false);
  }, [navbarOpen]);

  const renderNavLinks = () => (
    <ul className={s.menuList}>
      {['rent', 'buy', 'sell', 'manage property', 'resources'].map((item) => (
        <li key={item} className={s.menuListItem}>
          <NavLink to={`/${item}`}>{item}</NavLink>
        </li>
      ))}
    </ul>
  );

  const renderAuthButtons = () => (
    <div className={s.authBtnItem}>
      <button type="button" className={s.authBtn}>
        Login
      </button>
      <button type="button" className={s.authBtn}>
        Sign up
      </button>
    </div>
  );

  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <div className={s.logoWrapper}>
          <svg className={s.logo} role="img" aria-label="Estatery Logo" onClick={() => navigate('/')}>
            <use href={`${sprite}#icon-logo`} />
          </svg>
          <p className={s.logoText} onClick={() => navigate('/')}>
            Estatery
          </p>
        </div>

        {screenWidth >= 1090 ? (
          <nav className={s.navigationList}>
            <div className={s.navListItem}>{renderNavLinks()}</div>
            {renderAuthButtons()}
          </nav>
        ) : (
          <button className={s.menuWrapper} onClick={() => setNavbarOpen((prev) => !prev)}>
            <svg className={s.menuIcon} aria-hidden="true">
              <use href={`${sprite}#icon-menu`} />
            </svg>
          </button>
        )}
      </div>

      {navbarOpen && <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />}
    </header>
  );
};

export default Header;
