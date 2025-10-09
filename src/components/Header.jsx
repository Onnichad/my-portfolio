import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.brand}>
        <span>Christopher </span>
        <strong>Treil</strong>
      </NavLink>

      <nav className={styles.nav}>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
