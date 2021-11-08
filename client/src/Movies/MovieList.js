import React from 'react';

// import link
import { Link } from 'react-router-dom';

export default function MovieList(props) {

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  // add id to destructuring below
  const { title, director, metascore, id } = props.movie;

  return (
    <div className="movie-card">
      {/* When a user clicks on the movie card inside `MovieList` they should be taken to `/movies/{id of clicked movie here}` to see the details of the selected movie. */}
      <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
    </div>
  );
}
