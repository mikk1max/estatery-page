import s from './MenuOverlay.module.css';
import sprite from '../../assets/icons.svg';

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <div className={s.mobileMenuContainer}>
      <nav className={s.menuNav}>
        <ul className={s.navList}>
          <li className={s.menuClose} onClick={() => setNavbarOpen(!navbarOpen)}>
            <svg className={s.closeIcon} role="img" aria-label="close button">
              <use href={sprite + '#icon-close'}></use>
            </svg>
          </li>

          <li className={s.navListItem}>
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
          </li>

          <li className={s.authBtnItem}>
            <button type="button" className={s.authBtn}>
              Login
            </button>
            <button type="button" className={s.authBtn}>
              Sign up
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuOverlay;
