import React from 'react';

// import link
import { Link } from 'react-router-dom';

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      {/* change div to link so home button leads to home */}
      <Link to='/' className="home-button">
        Home
      </Link>
    </div>
  );
}
