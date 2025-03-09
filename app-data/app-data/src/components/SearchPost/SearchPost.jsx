import { useState, useEffect } from "react";

const SearchPost = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error de fetching: ", error));
  }, [query]);

  return (
    <div>
      <h1>Ejemplo de búsqueda</h1>
      <input
        type="text"
        placeholder="Buscar por título"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>
        {posts.map((posts) => {
          return <li key={posts.id}>{posts.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default SearchPost;
