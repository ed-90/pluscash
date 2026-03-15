import styles from './IdeaCard.module.css';  // ← ЭТО ВАЖНО!

function IdeaCard({ idea }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.date}>{idea.date}</span>
        <span className={styles.category}>{idea.category}</span>
      </div>
      <h3 className={styles.title}>{idea.title}</h3>
      <p className={styles.content}>{idea.content}</p>
    </div>
  );
}

export default IdeaCard;  // ← ЭТО ТОЖЕ ВАЖНО!