import styles from './Header.module.css';
import { useTheme } from '../contexts/ThemeContext';

function Header() {
  const { isDark } = useTheme();

  return (
    <header className={styles.header}>
      <img 
        src={isDark ? '/logo-dark.svg' : '/logo-light.svg'}
        alt="pluscash.ru"
        className={styles.logo}
      />
    </header>
  );
}

export default Header;