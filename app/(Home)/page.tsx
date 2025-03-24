import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import { API_URL } from "../../constants";

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
};
export const metadata = {
  title: "Home",
};


async function getMovies() {
  return fetch(API_URL).then((response) => response.json());
  // const response = await fetch(API_URL);
  // const movies = await response.json();
  // return movies;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie: Movie) => (
        <Movie
          id={movie.id}
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
