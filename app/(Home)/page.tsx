export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  return fetch(URL).then((response) => response.json());
  // const response = await fetch(URL);
  // const movies = await response.json();
  // return movies;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      <h1>Home!</h1>
      <div>{JSON.stringify(movies)}</div>
    </div>
  );
}
