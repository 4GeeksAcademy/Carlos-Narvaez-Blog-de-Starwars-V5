import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <nav className="navbar navbar-light bg-light mb-3 shadow-sm px-5">
            <div className="container">
                <Link to="/">
                    <img 
                        src="https://wikimedia.org" 
                        style={{ height: "50px" }} 
                        alt="Star Wars Logo" 
                    />
                </Link>
                
                <div className="ms-auto d-flex align-items-center">
                    {/* Favorites Dropdown */}
                    <div className="dropdown me-3">
                        <button 
                            className="btn btn-primary dropdown-toggle" 
                            type="button" 
                            id="dropdownMenuButton1" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            Favorites 
                            <span className="badge bg-secondary ms-1">{store.favoritos.length}</span>
                        </button>
                        
                        <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownMenuButton1" style={{ minWidth: "220px" }}>
                            {store.favoritos.length === 0 ? (
                                <li className="text-center text-muted py-2">Empty</li>
                            ) : (
                                store.favoritos.map((fav, index) => (
                                    <li key={index} className="d-flex justify-content-between align-items-center px-3 py-1">
                                        {/* text-black class ensures visibility; text-nowrap prevents line breaks */}
                                        <span className="text-black text-nowrap">
                                            {fav.name}
                                        </span>
                                        <button 
                                            className="btn btn-sm text-danger border-0 p-1"
                                            onClick={() => dispatch({ type: "delete_favorite", payload: fav })}
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
