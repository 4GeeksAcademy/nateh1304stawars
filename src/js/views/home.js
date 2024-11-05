import React, { useEffect, useState } from 'react';
import { Planet } from './Planet'; 
import { Vehicle } from './Vehicle'; 
import { Character } from './Character';
import {CharacterDetail} from './CharacterDetail';
import {PlanetDetail} from './PlanetDetail';
import {VehicleDetail} from './VehicleDetail';

export function Home() {
  const [characters, setCharacters] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/people')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching character data:', error));

    fetch('https://www.swapi.tech/api/vehicles')
      .then(response => response.json())
      .then(data => setVehicles(data.results))
      .catch(error => console.error('Error fetching vehicle data:', error));

    fetch('https://www.swapi.tech/api/planets')
      .then(response => response.json())
      .then(data => setPlanets(data.results))
      .catch(error => console.error('Error fetching planet data:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Characters</h1>
      <div className="scroll-box">
        {characters.map((character) => (
          <Character 
            key={character.uid}
            id= {character.uid}
            image="https://via.placeholder.com/150"
            name={character.name} 
            gender={character.gender} 
            hairColor={character.hair_color} 
            eyeColor={character.eye_color} 
          />
        ))}
      </div>
        
      
      <h1 className="mt-4">Planets</h1>
      <div className="scroll-box">
        {planets.map((planet) => (
          <Planet 
            key={planet.uid}
            id={planet.uid}
            image="https://via.placeholder.com/150"
            name={planet.name} 
            climate={planet.climate} 
            terrain={planet.terrain} 
            population={planet.population} 
          />
        ))}
      </div>




      <h1 className="mt-4">Vehicles</h1>
      <div className="scroll-box">
        {vehicles.map((vehicle) => (
          <Vehicle 
            key={vehicle.uid}
            id= {vehicle.uid}
            image="https://via.placeholder.com/150"
            name={vehicle.name} 
            model={vehicle.model} 
            manufacturer={vehicle.manufacturer} 
            cost={vehicle.cost_in_credits} 
          />
        ))}
      </div>

    </div>
  );
}
