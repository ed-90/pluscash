import styles from './SortButtons.module.css';

function SortButtons({ sortOrder, onSortChange }) {
  return (
    <div className={styles.sort}>
      <button
        onClick={() => onSortChange('desc')}
        className={`${styles.sortButton} ${sortOrder === 'desc' ? styles.active : ''}`}
      >
        Сначала новые ↓
      </button>
      <button
        onClick={() => onSortChange('asc')}
        className={`${styles.sortButton} ${sortOrder === 'asc' ? styles.active : ''}`}
      >
        Сначала старые ↑
      </button>
    </div>
  );
}

export default SortButtons;