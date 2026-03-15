import { useTheme } from '../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.toggle}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;