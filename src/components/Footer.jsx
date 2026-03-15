import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>© 2026 pluscash.ru — свежие идеи для заработка</p>
        <Link to="/about" className={styles.aboutLink}>О проекте</Link>
      </div>
    </footer>
  );
}

export default Footer;