import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.scss'

export default function MoviesList({items}) {

  const location = useLocation()

    const movies = items.map(({ id, title, name, release_date }) => {
      const releaseDate = release_date ? release_date?.split('-')[0] : ' ';
        return (
          <li key={id} className={css.movie_list_item}>
            <Link state = {{from: location}} to={`/movies/${id}`} className={css.link}>
              {title || name} ({releaseDate})
            </Link>
          </li>
        );
      });
      return <ul className={css.menu}>{movies}</ul>;
}

MoviesList.propTypes = {
  items: PropTypes.array,
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  release_date: PropTypes.string,
}