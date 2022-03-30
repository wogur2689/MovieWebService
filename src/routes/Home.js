import { useEffect, useState } from "react";
import Movie from "./Movie";

function Home() {
  const [loading, setLoading] = useState(true); //로딩
  const [movies, setMovies] = useState([]); //영화 리스트
  const getMovies = async() => {
    const json = await ( 
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json(); //호출과 함께 Json형태로 가져옴
    setMovies(json.data.movies);
    setLoading(false); //로딩중에 영화데이터를 가져옴.
  }
  useEffect(() => {
    getMovies();
  }, []); //처음 실행시 한번만 가져옴.(영화데이터API)
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie 
              key={movie.id}
              coverImg={movie.medium_cover_image} 
              title={movie.title} 
              year={movie.year} 
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;