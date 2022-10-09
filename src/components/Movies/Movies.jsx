import { useState, useEffect } from 'react'
import MoviesList from './MoviesList/MoviesList'
import {searchTrendDayMovie} from 'components/Api-service/Api'
import css from './Movies.module.scss'
import { Loader } from 'components/shared/Loader/Loader'

export default function Movies() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    
      useEffect(() =>{

        const fetchMovies = async ()=> {          
            try{
              setLoading(true)
                const data = await searchTrendDayMovie();
                setMovies((prevMovies) => [...prevMovies, ...data.results])

            } catch (error) {
                setError(error)

            } finally {
              setLoading(false)
            }          
        }

        fetchMovies()

    }, [])

  return (
    <div className={css.container}>
      <h2>Trending today</h2>
      {Boolean(movies.length) && <MoviesList items={movies} />}
      {loading && <Loader />}
      {error && <p>Movies load fail</p>}
    </div>
  )
}
