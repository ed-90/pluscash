import styles from './CategoryFilter.module.css';

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className={styles.filter}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`${styles.categoryButton} ${
            selectedCategory === category ? styles.active : ''
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;