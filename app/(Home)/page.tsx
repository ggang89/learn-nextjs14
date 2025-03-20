'use client'

import { useEffect, useState } from "react";



export default function Page() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    ); 
    const data = await response.json();
    setMovies(data);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  

  return (
    <div>
      <h1>Home!</h1>
      {loading ? (
        <h2>lodaing....</h2>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}