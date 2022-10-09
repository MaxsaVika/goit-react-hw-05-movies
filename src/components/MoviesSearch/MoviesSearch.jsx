import { searchMovies } from 'components/Api-service/Api'
import MoviesList from 'components/Movies/MoviesList/MoviesList'
import { Loader } from 'components/shared/Loader/Loader'
import { useEffect, useState } from 'react'
import MoviesSearchForm from './MoviesSearchForm'

export default function MoviesSearch() {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const onSearch = (search) => {
        setSearch(search)
        setMovies ([])
    }

      useEffect(() =>{
        // setMovies ([]) 

        const fetchMovies = async ()=> {          
            try{
              setLoading(true)
                const data = await searchMovies(search);
                setMovies((prevMovies) => [...prevMovies, ...data.results])

            } catch (error) {
                setError(error)

            } finally {
              setLoading(false)
            }          
        }

        if (search) fetchMovies()

    }, [search])

  return (
    <>
        <MoviesSearchForm onSubmit = {onSearch}/>   
        {movies && <MoviesList items={movies} />} 
        {loading && <Loader />}
        {error && <p>Movies not found</p>}
    </> 
  )
}
