import { API_URL } from "../../../../(home)/page";

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
    <div>
      {similars.map((similar) => (
        <div>{similar.title}</div>
      ))}
    </div>
  );
}
