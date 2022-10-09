import { useState } from 'react'
import css from './MoviesSearch.module.scss'

export default function MoviesSearchForm({onSubmit}) {
    const [search, setSearch] = useState('')

    const handleChange = ({target: {value}}) => {
        setSearch(value)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()

        if(search.trim() === "") {
           return  alert('Enter movie for search.')
        }

        onSubmit(search)
        setSearch('')
    }

  return (
    <form className={css.SearchForm} onSubmit = {handleSubmit}>
            <input 
                type="text" 
                value={search}
                name = "search"
                placeholder = "Search images and photos" 
                className = {css.SearchForm_input}
                onChange = {handleChange}
            />
            <button type="submit" className = {css.SearchForm_button} > 
                Search
            </button>       
    </form>
  )
}
