import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-credits.module.css";

interface ICredit {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  character: string;
}

async function getMovieCredit(id: string): Promise<ICredit[]> {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredit({ id }) {
  const credits: ICredit[] = await getMovieCredit(id);
  return (
    <div className={styles.wrapper}>
      {credits.slice(0, 5).map((credit) => {
        return (
          <div className={styles.container} key={credit.id}>
            <img src={credit.profile_path} alt={credit.name} />
            <span>{credit.name}</span>
          </div>
        );
      })}
    </div>
  );
}
