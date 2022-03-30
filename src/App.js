import { useEffect, useState } from "react";

function App() {
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
          {movies.map((movie) => 
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2> {/*영화제목*/}
              <h3>Year : {movie.year}</h3> {/*개봉연도*/}
              <p>{movie.summary}</p> {/*줄거리 요약*/}
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>{/*장르*/}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
