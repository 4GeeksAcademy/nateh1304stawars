import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export function Character({ image, name, gender, hairColor, eyeColor, id }) {
  const { actions } = useContext(Context);

  const handleFavoriteClick = () => {
    actions.toggleFavorite(name, id, "people"); 
  };

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Gender: {gender} <br />
          Hair Color: {hairColor} <br />
          Eye Color: {eyeColor}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/character/${id}`} className="btn btn-primary">Learn More</Link>
          <button onClick={handleFavoriteClick} className="btn">
            <i className="bi bi-suit-heart" />
          </button>
        </div>
      </div>
    </div>
  );
}
