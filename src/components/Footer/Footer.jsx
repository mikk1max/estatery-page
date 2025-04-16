import React from 'react';
import s from './Footer.module.css';
import sprite from '../../assets/icons.svg';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Footer = () => {
  return (
    <footer>
      <div className={s.logoDocsWrapper}>
        <div className={s.logoWrapper}>
          <svg className={s.logo} role="img" aria-label="Estatery Logo">
            <use href={sprite + '#icon-logo'}></use>
          </svg>
          <p className={s.logoText}>Estatery</p>
        </div>
        <ul className={s.docsList}>
          <li className={s.docsItem}>
            <Link to="/">Help Center</Link>
          </li>
          <li className={s.docsItem}>
            <Link to="/">FAQ</Link>
          </li>
          <li className={s.docsItem}>
            <Link to="/">TERMS & PRIVACY</Link>
          </li>
        </ul>
      </div>
      <div className={s.divider} />
      <div className={s.rightsSocialWrapper}>
        <p className={s.allRights}>©2021 Estatery. All rights reserved</p>
        <ul className={s.socials}>
          <li>
            <a href="/">
              <svg className={s.logo} role="img" aria-label="facebook logo">
                <use href={sprite + '#icon-facebook'}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg className={s.logo} role="img" aria-label="instagram logo">
                <use href={sprite + '#icon-instagram'}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg className={s.logo} role="img" aria-label="twitter logo">
                <use href={sprite + '#icon-twitter'}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg className={s.logo} role="img" aria-label="linkedin logo">
                <use href={sprite + '#icon-linkedin'}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
