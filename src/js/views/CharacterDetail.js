import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function CharacterDetail() {
  const params = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch('https://www.swapi.tech/api/people/' + params.id)
      .then(response => response.json())
      .then(data => setCharacter(data.result.properties))
      .catch(error => console.error('Error fetching character data:', error));
  }, [params.id]);

    
  return (
    <div className="card mb-3" style={{ width: '80vw' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://via.placeholder.com/150" className="img-fluid rounded-start" alt="Character" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Character Title</h5>
            <p className="card-text">This is a detailed description of the character...</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}





