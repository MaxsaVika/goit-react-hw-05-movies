import React from 'react'
import { Link } from 'react-router-dom';
import css from './MoviesList.module.scss'

export default function MoviesList({items}) {

    const movies = items.map(({ id, title, name }) => {
        return (
          <li key={id} className={css.movie_list_item}>
            <Link to={`/movies/${id}`} className={css.link}>
              {title || name}
            </Link>
          </li>
        );
      });
      return <ul className={css.menu}>{movies}</ul>;
}
