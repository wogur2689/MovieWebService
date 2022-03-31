import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, summary, genres}) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img}/>
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2> {/*영화제목*/}
                <h3 className={styles.movie__year}>Year : {year}</h3> {/*개봉연도*/}
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> {/*줄거리 요약*/}
                <ul className={styles.movie__genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>{/*장르*/}
            </div>
        </div>
    );
}

/** 어떤 prop를 가져와야 하는지 설정
 *  변수명: PropTypes.타입.필수인가 아닌가.
 */

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;