import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardVehicles = ({ vehicles }) => {
    return (
        <div className="card m-2" style={{ width: "18rem", flex: "none" }}>
            <img 
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicles.uid}.jpg`} 
                className="card-img-top" 
                alt={vehicles.name} 
                style={{ 
                    width: "100%",      
                    height: "300px",     
                    objectFit: "cover",  
                    objectPosition: "top" 
                }} 
            />
            <div className="card-body">
                <h5 className="card-title">{vehicles.properties?.name || vehicles.name}</h5>
                {/* Structure identical to CardPeople, just updated the labels */}
                <p className="card-text m-0">Model: {vehicles.properties?.model}</p>
                <p className="card-text m-0">Class: {vehicles.properties?.vehicle_class}</p>
                <p className="card-text">Cost: {vehicles.properties?.cost_in_credits}</p>                  
                
                <div className="d-flex justify-content-between">
                    <Link to={`/single/${vehicles.uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>
                    <button 
                        className="btn btn-outline-warning"
                        onClick={() => dispatch({ 
                            type: "add_favorite", 
                            payload: people // Send the whole character object
                        })}
                    >
                        ♥
                    </button>
                </div>
            </div>
        </div>
    );
};
