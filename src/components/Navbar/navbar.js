import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/" legacyBehavior>
            <a className={styles.navbarLink}>Home</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/about" legacyBehavior>
            <a className={styles.navbarLink}>About Me</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/contact" legacyBehavior>
            <a className={styles.navbarLink}>Contact Me</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;