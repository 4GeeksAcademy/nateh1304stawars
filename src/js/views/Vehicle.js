import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export function Vehicle({ image, name, model, manufacturer, id }) {
  const { actions } = useContext(Context);

  const handleFavoriteClick = () => {
    actions.toggleFavorite(name, id, "vehicle");
  };

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Model: {model} <br />
          Manufacturer: {manufacturer}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/vehicle/${id}`} className="btn btn-primary">Learn More</Link>
          <button onClick={handleFavoriteClick} className="btn">
            <i className="bi bi-suit-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
