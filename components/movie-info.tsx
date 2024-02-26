import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

interface IMovieInfo {
  backdrop_path: string;
  title: string;
  vote_average: number;
  overview: string;
  homepage: string;
}

async function getMovie(id: string): Promise<IMovieInfo> {
  console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie: IMovieInfo = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.backdrop_path} alt={movie.title} />
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <h3>★ {movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage}>Homepage &rarr;</a>
      </div>
    </div>
  );
}
