import React, { useEffect, useState } from 'react';
import sprite from '../../assets/icons.svg';
import s from './Header.module.css';
import MenuOverlay from '../MenuOverlay/MenuOverlay';
import { useScreenWidth } from '../../hooks/useScreenWidth';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const screenWidth = useScreenWidth();

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
      {['Rent', 'Buy', 'Sell', 'Manage Property', 'Resources'].map((item) => (
        <li key={item} className={s.menuListItem}>
          <a href="#">{item}</a>
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
          <svg className={s.logo} role="img" aria-label="Estatery Logo">
            <use href={`${sprite}#icon-logo`} />
          </svg>
          <p className={s.logoText}>Estatery</p>
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
