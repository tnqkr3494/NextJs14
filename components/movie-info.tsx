import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";
import MovieCredit from "./movie-credit";

interface IMovieInfo {
  backdrop_path: string;
  title: string;
  vote_average: number;
  overview: string;
  homepage: string;
}

export async function getMovie(id: string): Promise<IMovieInfo> {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie: IMovieInfo = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.cover}
        src={movie.backdrop_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <h3>★ {movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <MovieCredit id={id} />
        <a href={movie.homepage}>Homepage &rarr;</a>
      </div>
    </div>
  );
}
