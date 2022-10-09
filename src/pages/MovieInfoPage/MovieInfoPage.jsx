import { searchMovieById } from "components/Api-service/Api"
import { Loader } from "components/shared/Loader/Loader"
import { useEffect, useState } from "react"
import { useParams, useNavigate, Outlet, NavLink } from "react-router-dom"
import css from './MovieInfoPage.module.scss'

export default function MovieInfoPage() {
    const [movie, setMovie] = useState('')
    const [loading, setLoading] = useState(false)
    const[error, setError] = useState(null)

    const {id} = useParams()
    const navigate = useNavigate()

    const getClassName = ({ isActive }) => {
        return isActive ? `${css.link} ${css.active}` : `${css.link}`;
      };

    const imagePath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://w7.pngwing.com/pngs/772/172/png-transparent-film-cinema-television-android.png';
    const releaseDate = movie.release_date ? movie.release_date?.split('-')[0] : 'No data';

    useEffect(() => {
        const fetchMovie = async ()=> {          
            try{
                setLoading(true)
                const data = await searchMovieById(id);
                setMovie(data)

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }         
        }

        fetchMovie()

    },[id])

    const goBack = () => navigate(-1)

  return (
    <section className={css.movieSection}>
        <button type="button" onClick={goBack} className={css.goBackBtn}>Go back</button>
      {loading && <Loader />}
      {error && <p>Movie load fail</p>}
      {movie && (
    <>
        <div className={css.movieWrapper}>
            <div className={css.movieImgThumb}>
                <img src={imagePath} alt={movie.title || movie.name} className={css.movieImg}/>
            </div>

            <div className={css.movieInfo}>
                <h2 className={css.movieTitle}>{movie.title || movie.name} ({releaseDate})</h2>
                <ul className={css.movieInfoList}>
                    <li className={css.movieInfoItem}>User score: <span className={css.movieInfoDetail}>{Math.round(movie.vote_average * 10)}%</span></li>
                    <li className={css.movieInfoItem}>Popularity: <span className={css.movieInfoDetail}>{movie.popularity}</span></li>
                    <li className={css.movieInfoItem}>Duration: <span className={css.movieInfoDetail}>{movie.runtime} min</span></li>
                </ul>  
                <div className={css.movieInfoWrapper}>
                    <h4>About</h4>
                    <p className={css.movieInfoAbout}>{movie.overview}</p>
                </div>   
                
                
                <div className={css.movieInfoWrapper}>
                    <h4>Genres</h4>
                    <p className={css.movieInfoAbout}>
                        {movie.genres.map(genre => 
                            (<span  className={css.movieGenre} key = {genre.id}>{genre.name}</span>))}
                    </p>
                </div>
               
            </div>
        </div>

        <div className={css.movieAdditionalWrapper}>
            <h4>Additional information</h4>
            <ul className={css.movieAdditionalInfoList}>
                <li><NavLink to={'cast'} className={getClassName} end>Cast</NavLink></li> 
                <li><NavLink to={'reviews'} className={getClassName} end>Reviews</NavLink></li> 
            </ul>
            <Outlet/>
        </div>
    </>)}
    </section>
  )
}
