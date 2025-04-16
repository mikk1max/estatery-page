import React, { useEffect, useRef, useState } from 'react';
import sprite from '../../assets/icons.svg';
import s from './Header.module.css';
import MenuOverlay from '../MenuOverlay/MenuOverlay';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const headerWrapper = document.querySelector('.' + s.headerWrapper);
    console.log(headerWrapper);

    if (navbarOpen) {
      document.body.style.overflow = 'hidden';
      if (main) main.style.filter = 'blur(25px)';
      if (footer) footer.style.filter = 'blur(25px)';
      if (headerWrapper) headerWrapper.style.filter = 'blur(25px)';
    } else {
      document.body.style.overflow = 'unset';
      if (main) main.style.filter = 'none';
      if (footer) footer.style.filter = 'none';
      if (headerWrapper) headerWrapper.style.filter = 'none';
    }

    return () => {
      document.body.style.overflow = 'unset';
      if (main) main.style.filter = 'none';
      if (footer) footer.style.filter = 'none';
      if (headerWrapper) headerWrapper.style.filter = 'none';
    };
  }, [navbarOpen]);

  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <div className={s.logoWrapper}>
          <svg className={s.logo} role="img" aria-label="Estatery Logo">
            <use href={sprite + '#icon-logo'}></use>
          </svg>
          <p className={s.logoText}>Estatery</p>
        </div>

        <nav className={s.navigationList}>
          <div className={s.navListItem}>
            <ul className={s.menuList}>
              <li className={s.menuListItem}>
                <a href="#">Rent</a>
              </li>
              <li className={s.menuListItem}>
                <a href="#">Buy</a>
              </li>
              <li className={s.menuListItem}>
                <a href="#">Sell</a>
              </li>
              <li className={s.menuListItem}>
                <a href="#">Manage Property</a>
              </li>
              <li className={s.menuListItem}>
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>

          <div className={s.authBtnItem}>
            <button type="button" className={s.authBtn}>
              Login
            </button>
            <button type="button" className={s.authBtn}>
              Sign up
            </button>
          </div>
        </nav>

        <button className={s.menuWrapper} onClick={() => setNavbarOpen(!navbarOpen)}>
          <svg className={s.menuIcon} aria-hidden="true">
            <use href={sprite + '#icon-menu'}></use>
          </svg>
        </button>
      </div>
      {navbarOpen && <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />}
    </header>
  );
};

export default Header;
