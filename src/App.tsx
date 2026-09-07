import { useEffect, useState } from "react";
import './App.css'

type Movie = {
  id: string;
  original_title: string;
  poster_path: string;
  overview: string;
};

type MovieJson = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

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
    setMovieList(
      data.results.map((movie: Movie) => ({
        id: movie.id,
        original_title: movie.original_title,
        poster_path: movie.poster_path,
        overview: movie.overview,
      }))
    );
  };

  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState<Movie[]>([]);

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
