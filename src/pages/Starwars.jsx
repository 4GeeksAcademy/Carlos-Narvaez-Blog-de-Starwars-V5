import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { CardPeople } from "../components/CardPeople.jsx";
import { CardPlanets } from "../components/CardPlanets.jsx";
import { CardVehicles } from "../components/CardVehicles.jsx"; // 1. Import the new card
import React, { useEffect } from "react";

export const Starwars = () => {
    const { store, dispatch } = useGlobalReducer();

    async function cartaPersonajes() {
        try {
            const response = await fetch("https://www.swapi.tech/api/people/?expanded=true");
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
            const data = await response.json();
            dispatch({
                type: "set_personajes",
                payload: { personaje: data.results }
            });
        } catch (error) {
            console.error("Error en cargar personajes:", error);
        }
    }

    async function cartaPlanetas() {
        try {
            const response = await fetch("https://www.swapi.tech/api/planets/?expanded=true");
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
            const data = await response.json();
            dispatch({ 
                type: "set_planets", 
                payload: { planets: data.results } 
            });
        } catch (error) { 
            console.error("Error cargando planetas:", error); 
        }
    }

    // 2. New function for Vehicles
    async function cartaVehiculos() {
        try {
            const response = await fetch("https://www.swapi.tech/api/vehicles/?expanded=true");
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
            const data = await response.json();
            dispatch({ 
                type: "set_vehicles", 
                payload: { vehicles: data.results } 
            });
        } catch (error) { 
            console.error("Error cargando vehiculos:", error); 
        }
    }

    useEffect(() => {
        cartaPersonajes();
        cartaPlanetas();
        cartaVehiculos(); // 3. Call the vehicle fetch
    }, []);

    return (
        <div className="container">
            <h2 className="mt-4">Starwars</h2>
            
            <h3 className="text-danger">Characters</h3>
            <div className="d-flex" style={{ overflow: "auto", paddingBottom: "10px" }}>
                {store.character?.map((value, index) => (
                    <CardPeople key={index} people={value} />
                ))}
            </div>

            <h3 className="text-danger mt-4">Planets</h3>
            <div className="d-flex" style={{ overflow: "auto", paddingBottom: "10px" }}>
                {store.planets?.map((value, index) => (
                    <CardPlanets key={index} planets={value} />
                ))}
            </div>
            
            {/* 4. Map the Vehicles */}
            <h3 className="text-danger mt-4">Vehicles</h3>
            <div className="d-flex" style={{ overflow: "auto", paddingBottom: "10px" }}>
                {store.vehicles?.map((value, index) => (
                    <CardVehicles key={index} vehicles={value} />
                ))}
            </div>

            <Link to="/">
                <button className="btn btn-primary mt-3 mb-5">Back home</button>
            </Link>
        </div>
    );
};
