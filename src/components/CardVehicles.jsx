import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardVehicles = ({ vehicles }) => {
    // 1. You MUST extract dispatch from the hook here
    const { dispatch } = useGlobalReducer();

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
                onError={(e) => { e.target.src = "https://starwars-visualguide.com"; }}
            />
            <div className="card-body">
                <h5 className="card-title">{vehicles.properties?.name || vehicles.name}</h5>
                <p className="card-text m-0">Model: {vehicles.properties?.model}</p>
                <p className="card-text m-0">Class: {vehicles.properties?.vehicle_class}</p>
                <p className="card-text">Cost: {vehicles.properties?.cost_in_credits}</p>                  
                
                <div className="d-flex justify-content-between">
                    {/* 2. Update Link to include the 'vehicles' type for your Single view */}
                    <Link to={`/vehicle/${vehicles.uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>
                    <button 
                        className="btn btn-outline-warning"
                        onClick={() => dispatch({ type: "add_favorite", payload: vehicles })}
                    >
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
