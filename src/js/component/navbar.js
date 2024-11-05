import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const favorites = store.favorites || [];

	const handleRemoveFavorite = (favoriteName) => {
		actions.deleteFavorite(favoriteName); 
	};

	return (
		<nav className="header bg-light text-dark py-3">
			<div className="container d-flex justify-content-between align-items-center">
				<div>
					<img 
						src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png" 
						alt="Star Wars Logo" 
						style={{ width: '70px', height: '40px' }} 
					/>
				</div>
				<div className="dropdown">
					<button 
						className="btn btn-secondary dropdown-toggle d-flex align-items-center" 
						type="button" 
						id="favoritesDropdown" 
						data-bs-toggle="dropdown" 
						aria-expanded="false"
					>
						<span className="me-2">Favorites</span>  
						<span className="badge bg-secondary">{favorites.length}</span>
					</button>
					<div className="dropdown-menu" aria-labelledby="favoritesDropdown">
						{favorites.length > 0 ? (
							favorites.map((favorite, index) => (
								<div className="d-flex align-items-center dropdown-item" key={index}>
									<Link to={`/details/${favorite.uid}`} className="flex-grow-1 text-decoration-none text-dark">
										{favorite.name}
									</Link>
									<button 
										className="bi bi-trash" 
										onClick={() => handleRemoveFavorite(favorite.name)} 
									>
										&times;
									</button>
								</div>
							))
						) : (
							<span className="dropdown-item text-center">(empty)</span>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
