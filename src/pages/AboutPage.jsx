import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css';

function AboutPage() {
  return (
    <div className={styles.about}>
      <h1>О проекте pluscash.ru</h1>
      
      <section className={styles.section}>
        <h2>Зачем мы здесь</h2>
        <p>
          pluscash.ru — это ежедневный сборник свежих идей для заработка. 
          Мы не продаём курсы и не обещаем "миллион за неделю". 
          Только реальные, рабочие способы, которые доступны каждому.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Как это работает</h2>
        <p>
          Каждый день мы публикуем одну новую идею. 
          Вы можете фильтровать их по категориям, сортировать по дате 
          и возвращаться за новыми мыслями снова и снова.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Почему нам можно доверять</h2>
        <p>
          Все идеи проверяются редакцией. Мы не рекламируем сомнительные схемы 
          и не берём деньги за "волшебные таблетки". Только честные способы 
          заработать своим трудом или умом.
        </p>
      </section>

      <Link to="/" className={styles.backLink}>
        ← На главную
      </Link>
    </div>
  );
}

export default AboutPage;