import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardPlanets = ({ planets }) => {
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
            />
            <div className="card-body">
                <h5 className="card-title">{planets.properties?.name || planets.name}</h5>
                <p className="card-text m-0">Population: {planets.properties?.population}</p>
                <p className="card-text m-0">Terrain: {planets.properties?.terrain}</p>
                <p className="card-text">Climate: {planets.properties?.climate}</p>                   
                
                <div className="d-flex justify-content-between mt-3">
                    <Link to={`/single/${planets.uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>
                    <button className="btn btn-outline-warning">♥</button>
                </div>
            </div>
        </div>
    );
};
