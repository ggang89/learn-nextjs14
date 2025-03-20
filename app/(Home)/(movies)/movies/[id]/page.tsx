import { API_URL } from "../../../page";

type Params = Promise<{
  id: string;
}>;

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

// 예고편 가져오기
async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({ params }: { params: Params }) {
  const { id } = await params;
  // movie data를 받고, videos data를 받아온다.(순차적)
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  // Promise.all을 사용하여 동시에 받아온다.
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <>
      <h1>movies "{movie.title}"</h1>
    </>
  );
}
