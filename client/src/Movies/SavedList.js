import React from 'react';

// import useHistory
import { useHistory } from 'react-router-dom';

// import link
import { Link } from 'react-router-dom';

export default function SavedList(props) {

  const history = useHistory();

  const goHome = () => {
    history.push("/");
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      {/* change div to link so home button leads to home */}
      <div
        className="home-button"
        onClick={goHome}>
        Home</div>
    </div>
  );
}
