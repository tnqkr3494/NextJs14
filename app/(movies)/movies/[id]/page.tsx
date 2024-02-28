import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export async function generateMetadata({ params: { id } }) {
  const movieTitle = await getMovie(id);
  return {
    title: movieTitle.title,
  };
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div style={{ width: "95%", margin: "0 auto" }}>
      <MovieInfo id={id} />
      <hr />
      <MovieVideos id={id} />
    </div>
  );
}
