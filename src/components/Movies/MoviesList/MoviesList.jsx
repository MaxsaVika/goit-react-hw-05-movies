import React from 'react'
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
