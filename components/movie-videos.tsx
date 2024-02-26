import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

interface IVideos {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

async function getVideos(id: string): Promise<IVideos[]> {
  console.log(`Fetching videos: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos: IVideos[] = await getVideos(id);
  return (
    <div className={styles.wrapper}>
      <p>Related Videos</p>
      <div className={styles.container}>
        {videos.map((video) => (
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}
          />
        ))}
      </div>
    </div>
  );
}
