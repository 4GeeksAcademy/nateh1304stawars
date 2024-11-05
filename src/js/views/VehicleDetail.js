import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

export function VehicleDetail() {
    const params = useParams();
    console.log(params)
    const [vehicle, setVehicle] = useState([]);

    useEffect(() => {
        fetch('https://www.swapi.tech/api/vehicles/' + params.id)
          .then(response => response.json())
          .then(data => setPlanet(data.result.properties))
          .catch(error => console.error('Error fetching character data:', error));
    }, [])

    
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="Character" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
          <h5 className="card-title">Planet Title</h5>
            <p className="card-text">This is a detailed description of the planet...</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}