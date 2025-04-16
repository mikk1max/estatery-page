import React from 'react';
import { Link } from 'react-router-dom';
import s from './Footer.module.css';
import sprite from '../../assets/icons.svg';

const Footer = () => {
  const docsLinks = [
    { to: '/', label: 'Help Center' },
    { to: '/', label: 'FAQ' },
    { to: '/', label: 'Terms & Privacy' },
  ];

  const socialLinks = [
    { href: '/', icon: 'facebook', label: 'Facebook' },
    { href: '/', icon: 'instagram', label: 'Instagram' },
    { href: '/', icon: 'twitter', label: 'Twitter' },
    { href: '/', icon: 'linkedin', label: 'LinkedIn' },
  ];

  return (
    <footer className={s.footer}>
      <div className={s.logoDocsWrapper}>
        <div className={s.logoWrapper}>
          <svg className={s.logo} role="img" aria-label="Estatery Logo">
            <use href={`${sprite}#icon-logo`} />
          </svg>
          <p className={s.logoText}>Estatery</p>
        </div>

        <ul className={s.docsList}>
          {docsLinks.map(({ to, label }) => (
            <li key={label} className={s.docsItem}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={s.divider} />

      <div className={s.rightsSocialWrapper}>
        <p className={s.allRights}>&copy; {new Date().getFullYear()} Estatery. All rights reserved.</p>
        <ul className={s.socials}>
          {socialLinks.map(({ href, icon, label }) => (
            <li key={icon}>
              <a href={href} aria-label={label}>
                <svg className={s.logo} role="img">
                  <use href={`${sprite}#icon-${icon}`} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
