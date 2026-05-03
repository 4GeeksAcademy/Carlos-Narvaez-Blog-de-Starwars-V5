import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const DetailVehicles = () => {
    const { uid } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/vehicles/" + uid)
            .then(res => res.json())
            .then(data => {
                if (data.result) {
                    setVehicle(data.result.properties);
                }
            })
            .catch(err => console.error("Error fetching vehicle:", err));
    }, [uid]);

    if (!vehicle) return <div className="text-center mt-5"><h2 className="text-danger">Loading Vehicle...</h2></div>;

    return (
        <div className="container mt-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 text-center">
                    <img 
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${uid}.jpg`}  
                        className="img-fluid rounded shadow-lg" 
                        alt={vehicle.name}
                        style={{ maxHeight: "500px" }}
                        onError={(e) => { e.target.src = "https://starwars-visualguide.com"; }}
                    />
                </div>
                <div className="col-md-6 text-center px-4">
                    <h1 className="display-3 mb-4">{vehicle.name}</h1>
                    <p className="lead fs-4">
                        A specialized craft in the Star Wars universe, the {vehicle.name} provides essential transportation and tactical advantages across various planetary terrains.
                    </p>
                </div>
            </div>
            
            <hr className="my-5 text-danger border-3" />
            
            <div className="row text-danger text-center fw-bold fs-5">
                <div className="col border-end border-danger">Model<br /><span className="text-dark fw-normal">{vehicle.model}</span></div>
                <div className="col border-end border-danger">Class<br /><span className="text-dark fw-normal">{vehicle.vehicle_class}</span></div>
                <div className="col border-end border-danger">Manufacturer<br /><span className="text-dark fw-normal">{vehicle.manufacturer}</span></div>
                <div className="col border-end border-danger">Cost<br /><span className="text-dark fw-normal">{vehicle.cost_in_credits}</span></div>
                <div className="col border-end border-danger">Length<br /><span className="text-dark fw-normal">{vehicle.length}</span></div>
                <div className="col">Crew<br /><span className="text-dark fw-normal">{vehicle.crew}</span></div>
            </div>

            <div className="text-center mt-5 mb-5">
                <Link to="/starwars" className="btn btn-outline-danger btn-lg">Back to Starwars</Link>
            </div>
        </div>
    );
};
