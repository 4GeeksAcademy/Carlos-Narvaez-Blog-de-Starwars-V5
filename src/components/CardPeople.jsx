import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardPeople = ({ people }) => {
    const { dispatch } = useGlobalReducer();

    return (
        <div className="card m-2" style={{ width: "18rem", flex: "none" }}>
            <img 
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} 
                className="card-img-top" 
                style={{ height: "300px", objectFit: "cover" }} 
                alt={people.name}
            />
            <div className="card-body">
                <h5 className="card-title">{people.properties?.name || people.name}</h5>
                <p className="card-text m-0">Gender: {people.properties?.gender}</p>
                <p className="card-text m-0">Hair: {people.properties?.hair_color}</p>
                <p className="card-text">Eyes: {people.properties?.eye_color}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/single/${people.uid}`} className="btn btn-outline-primary">Learn more!</Link>
                    <button 
                        className="btn btn-outline-warning"
                        onClick={() => dispatch({ type: "add_favorite", payload: people })}
                    >
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
