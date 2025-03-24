import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../../components/movie-info";
import MovieVideos from "../../../../../components/movie-videos";

type Params = Promise<{
  id: string;
}>;

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: { params: Params }) {
  const { id } = await params;

  // suspense로 감싸서 각각 컴포넌트를 로딩하면
  // loading.tsx를 사용하지 않고 fallback을 사용한다
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
