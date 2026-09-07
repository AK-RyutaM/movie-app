import { useEffect, useState } from "react";
import './App.css'

function App() {
  const fetchMovieList = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=ja&page=1`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    console.log(data.results)
    setMovieList(data.results);
  };

  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <>
      <div>{keyword}</div>
      <input type="text" onChange={(e) => setKeyword(e.target.value)} />
      {movieList
        .filter((movie) => movie.original_title.includes(keyword))
        .map((movie) => (
          <div key={movie.id}>
            <h2>{movie.original_title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
            <p>{movie.overview}</p>
          </div>
        ))}
    </>
  )
}

export default App
