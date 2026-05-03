import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const DetailPlanets = () => {
    // 1. Get the uid from the URL (make sure your route is: "/planet/:uid")
    const { uid } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        // 2. Fetch the specific planet details from swapi.tech
        fetch("https://www.swapi.tech/api/planets/" + uid)
            .then(res => res.json())
            .then(data => {
                // Access data -> result -> properties
                if (data.result) {
                    setPlanet(data.result.properties);
                }
            })
            .catch(err => console.error("Error fetching planet:", err));
    }, [uid]);

    // 3. Loading state
    if (!planet) return (
        <div className="text-center mt-5">
            <h2 className="text-danger">Loading Planet...</h2>
        </div>
    );

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 text-center">
                    {/* Planet image from same GitHub repo using the uid */}
                    <img 
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${uid}.jpg`} 
                        className="img-fluid rounded shadow-lg" 
                        alt={planet.name}
                        style={{ maxHeight: "500px" }}
                        onError={(e) => { 
                            // Fallback if specific planet image is missing
                            e.target.src = "https://starwars-visualguide.com"; 
                        }}
                    />
                </div>
                <div className="col-md-6 text-center px-4">
                    <h1 className="display-3 mb-4">{planet.name}</h1>
                    <p className="lead fs-4">
                        Tucked away in a distant corner of the galaxy, the planet {planet.name} possesses unique geographical features and a distinctive climate that shapes its history.
                    </p>
                </div>
            </div>
            
            <hr className="my-5 text-danger border-3" />
            
            {/* Horizontal Specs Row */}
            <div className="row text-danger text-center fw-bold fs-5">
                <div className="col border-end border-danger">Name<br /><span className="text-dark fw-normal">{planet.name}</span></div>
                <div className="col border-end border-danger">Climate<br /><span className="text-dark fw-normal">{planet.climate}</span></div>
                <div className="col border-end border-danger">Population<br /><span className="text-dark fw-normal">{planet.population}</span></div>
                <div className="col border-end border-danger">Orbital Period<br /><span className="text-dark fw-normal">{planet.orbital_period}</span></div>
                <div className="col border-end border-danger">Rotation Period<br /><span className="text-dark fw-normal">{planet.rotation_period}</span></div>
                <div className="col">Diameter<br /><span className="text-dark fw-normal">{planet.diameter}</span></div>
            </div>

            <div className="text-center mt-5 mb-5">
                <Link to="/starwars" className="btn btn-outline-danger btn-lg">Back to Starwars</Link>
            </div>
        </div>
    );
};
