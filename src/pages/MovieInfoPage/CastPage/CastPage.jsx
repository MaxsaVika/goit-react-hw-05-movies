import { searchMovieCast } from "components/Api-service/Api"
import PropTypes from 'prop-types'
import { Loader } from "components/shared/Loader/Loader"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import css from './CastList.module.scss'

export default function CastPage() {
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(false)
  const[error, setError] = useState(null)

  const {id} = useParams()

  useEffect(() => {
      const fetchCast = async ()=> {          
          try{
              setLoading(true)
              const data = await searchMovieCast(id);
              setCast(data.cast)

          } catch (error) {
              setError(error)
          } finally {
              setLoading(false)
          }         
      }

      fetchCast()

  },[id])

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Movie load fail</p>}
      {cast.length !== 0 ? (
        <div>
          <ul className={css.castList}>
            {cast.map(({name, id, profile_path, character })=>{
              return (
                <li key = {id} className={css.castItem}>
                  <img className={css.castImg} src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'} alt=""/>
                  <div>
                    <h4>{name}</h4>
                    <span>"{character}"</span>
                  </div>                 
                </li>
              )
            })}
          </ul>
        </div>) : <p className={css.noCastInfo}>There is no information about the cast of this movie.</p>
    }
    </div>
  )
}

CastPage.propTypes = {
  id: PropTypes.number,
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
}