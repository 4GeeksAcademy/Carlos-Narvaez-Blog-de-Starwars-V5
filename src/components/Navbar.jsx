import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <nav className="navbar navbar-light bg-light mb-3 shadow-sm px-5">
            <div className="container">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span 
                        className="navbar-brand mb-0 h1 text-warning fw-bold" 
                        style={{ 
                            fontSize: "2rem", 
                            letterSpacing: "-2px", 
                            lineHeight: "0.8",
                            textTransform: "uppercase",
                            fontFamily: "sans-serif"
                        }}
                    >
                        STAR<br/>WARS
                    </span>
                </Link>
                
                <div className="ms-auto d-flex align-items-center">
                    <div className="dropdown me-3">
                        <button 
                            className="btn btn-primary dropdown-toggle" 
                            type="button" 
                            id="favoritesDropdown" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            Favorites 
                            <span className="badge bg-secondary ms-1">{store.favoritos.length}</span>
                        </button>
                        
                        <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="favoritesDropdown" style={{ minWidth: "225px" }}>
                            {store.favoritos.length === 0 ? (
                                <li className="text-center text-muted py-2">Empty</li>
                            ) : (
                                store.favoritos.map((fav, index) => (
                                    <li key={index} className="d-flex justify-content-between align-items-center px-3 py-1">
                                        <span className="text-dark text-nowrap">
                                            {fav.properties?.name || fav.name}
                                        </span>
                                        <button 
                                            className="btn btn-sm text-danger border-0 p-1"
                                            onClick={(e) => {
                                                e.stopPropagation(); 
                                                dispatch({ type: "delete_favorite", payload: fav });
                                            }}
                                        >
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>

                    <Link to="/starwars">
                        <button className="btn btn-danger">Starwars</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
