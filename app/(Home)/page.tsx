import Link from "next/link";

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}
export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  return fetch(API_URL).then((response) => response.json());
  // const response = await fetch(API_URL);
  // const movies = await response.json();
  // return movies;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      <div>
        {movies.map((movie:Movie) => (
          <div key={movie.id}>
            <img src={movie.poster_path } alt={movie.title } />
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
