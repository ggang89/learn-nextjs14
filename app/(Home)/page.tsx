import Link from "next/link";

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
      <h1>Home!</h1>
      <div>{movies.map(movie => (
        <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>
      ))}</div>
    </div>
  );
}
