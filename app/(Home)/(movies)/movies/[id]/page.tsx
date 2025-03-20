import { Suspense } from "react";
import MovieInfo from "../../../../../components/movie-info";
import MovieVideos from "../../../../../components/movie-videos";

type Params = Promise<{
  id: string;
}>;

export default async function MovieDetail({ params }: { params: Params }) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h2>"movie info loading..."</h2>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h2>"movie video loading..."</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
