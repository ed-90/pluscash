import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IdeaCard from "./components/IdeaCard";
import CategoryFilter from "./components/CategoryFilter";
import SortButtons from "./components/SortButtons";
import ThemeToggle from "./components/ThemeToggle";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("все");
  const [sortOrder, setSortOrder] = useState("desc");
  const [allIdeas, setAllIdeas] = useState([]); // все идеи с сервера
  const [displayedIdeas, setDisplayedIdeas] = useState([]); // те, что показываем
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ITEMS_PER_PAGE = 10;

  // Загружаем все идеи с бэкенда (один раз)
  useEffect(() => {
    fetch("https://api.pluscash.ru/api/ideas")
      .then((res) => res.json())
      .then((data) => {
        setAllIdeas(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading ideas:", err);
        setError("Не удалось загрузить идеи");
        setLoading(false);
      });
  }, []);

  // Получаем все уникальные категории
  const categories = ["все", ...new Set(allIdeas.map((idea) => idea.category))];

  // Фильтруем и сортируем все идеи
  const filteredAndSortedAll = useMemo(() => {
    const filtered =
      selectedCategory === "все"
        ? allIdeas
        : allIdeas.filter((idea) => idea.category === selectedCategory);

    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });
  }, [selectedCategory, sortOrder, allIdeas]);

  // При изменении фильтров сбрасываем пагинацию
  useEffect(() => {
    setDisplayedIdeas(filteredAndSortedAll.slice(0, ITEMS_PER_PAGE));
    setHasMore(filteredAndSortedAll.length > ITEMS_PER_PAGE);
    setPage(1);
  }, [filteredAndSortedAll]);

  // Загружаем следующую порцию
  const loadMore = () => {
    const nextPage = page + 1;
    const start = 0; // всегда с начала
    const end = nextPage * ITEMS_PER_PAGE;
    const newIdeas = filteredAndSortedAll.slice(start, end);

    setDisplayedIdeas(newIdeas);
    setPage(nextPage);

    if (newIdeas.length >= filteredAndSortedAll.length) {
      setHasMore(false);
    }
  };

  if (loading) return <div className="loading">Загрузка идей...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="app">
      <ThemeToggle />
      <Header />
      <main className="main">
        <h2 className="pageTitle">Новые идеи для заработка</h2>

        <div className="controls">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <SortButtons sortOrder={sortOrder} onSortChange={setSortOrder} />
        </div>

        <div className="ideasCount">
          Всего идей: {filteredAndSortedAll.length}
        </div>

        <InfiniteScroll
          dataLength={displayedIdeas.length} // сколько уже показано
          next={loadMore} // функция для загрузки следующих
          hasMore={displayedIdeas.length < filteredAndSortedAll.length} // есть ли ещё
          loader={
            <div
              className="loading"
              style={{ padding: "20px", textAlign: "center" }}
            >
              Загружаем ещё идеи...
            </div>
          }
          endMessage={
            <p
              style={{
                textAlign: "center",
                margin: "40px 0",
                color: "var(--text-muted)",
              }}
            >
              {displayedIdeas.length > 0
                ? "🎉 Это все идеи на данный момент!"
                : ""}
            </p>
          }
        >
          {displayedIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </InfiniteScroll>
      </main>
      <Footer />
    </div>
  );
}

export default App;
