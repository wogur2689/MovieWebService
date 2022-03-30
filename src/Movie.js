import PropTypes from "prop-types";

function Movie({coverImg, title, year, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>{title}</h2> {/*영화제목*/}
            <h3>Year : {year}</h3> {/*개봉연도*/}
            <p>{summary}</p> {/*줄거리 요약*/}
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>{/*장르*/}
        </div>
    );
}

/** 어떤 prop를 가져와야 하는지 설정
 *  변수명: PropTypes.타입.필수인가 아닌가.
 */

Movie.PropTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;