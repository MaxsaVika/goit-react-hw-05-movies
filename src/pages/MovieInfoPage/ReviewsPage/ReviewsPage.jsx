import { searchMovieReviews } from "components/Api-service/Api"
import PropTypes from 'prop-types'
import { Loader } from "components/shared/Loader/Loader"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import css from './ReviewsPage.module.scss'

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(false)
  const[error, setError] = useState(null)

  const {id} = useParams()

  useEffect(() => {
      const fetchReviews = async ()=> {          
          try{
              setLoading(true)
              const data = await searchMovieReviews(id);
              setReviews(data.results)

          } catch (error) {
              setError(error)
          } finally {
              setLoading(false)
          }         
      }

      fetchReviews()

  },[id])

  return (
    <div>
      {loading && <Loader />}
      {error && <p>No reviews</p>}
      {reviews.length !== 0 ? 
        (<div>
          <ul className={css.reviewsList}>
            {reviews.map(({id, author, content })=>{
              return (
                <li key = {id} className={css.reviewsItem}>                
                    <h4 className={css.reviewsAuthor}>Author: {author}</h4>
                    <p className={css.reviewsText}>{content}</p>                                 
                </li>
              )
            })}
          </ul>
        </div>) : <p className={css.reviewsItem}>We don't have any reviews for this movie.</p>
      }
    </div>
  )
}

ReviewsPage.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  content: PropTypes.string,
}