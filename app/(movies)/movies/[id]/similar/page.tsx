import { API_URL } from "../../../../(home)/page";
import Movie from "../../../../../components/movie";
import styles from "../../../../../styles/home.module.css";

export const metadata = {
  title: "Similar",
};

interface ISimilar {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  vote_count: number;
}

async function getSimilarMovies(id: string): Promise<ISimilar[]> {
  const response = await fetch(`${API_URL}/${id}/similar`);
  const json = response.json();
  return json;
}

export default async function MovieSimilar({ params: { id } }) {
  const similars: ISimilar[] = await getSimilarMovies(id);

  return (
    <div className={styles.container}>
      {similars.map((similar) => (
        <Movie
          key={similar.id}
          title={similar.title}
          id={similar.id}
          poster_path={similar.poster_path}
        />
      ))}
    </div>
  );
}
