import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // 1. Import the hook

export const CardPlanets = ({ planets }) => {
    const { dispatch } = useGlobalReducer(); // 2. Get the dispatch function

    return (
        <div className="card m-2" style={{ width: "18rem", flex: "none" }}>
            <img 
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planets.uid}.jpg`} 
                className="card-img-top" 
                alt={planets.name} 
                style={{ 
                    width: "100%",      
                    height: "300px",     
                    objectFit: "cover"
                }} 
                onError={(e) => { e.target.src = "https://starwars-visualguide.com"; }}
            />
            <div className="card-body">
                <h5 className="card-title">{planets.properties?.name || planets.name}</h5>
                <p className="card-text m-0">Population: {planets.properties?.population}</p>
                <p className="card-text m-0">Terrain: {planets.properties?.terrain}</p>
                <p className="card-text">Climate: {planets.properties?.climate}</p>                   
                
                <div className="d-flex justify-content-between mt-3">
                    <Link to={`/planet/${planets.uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>
                    {/* 3. Add the onClick event here */}
                    <button 
                        className="btn btn-outline-warning"
                        onClick={() => dispatch({ type: "add_favorite", payload: planets })}
                    >
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
