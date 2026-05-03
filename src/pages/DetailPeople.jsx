import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const DetailPeople = () => {
    const { uid } = useParams(); 
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => {
                if (data.result) {
                    setCharacter(data.result.properties);
                }
            })
            .catch(err => console.error("Error fetching character:", err));
    }, [uid]);

    if (!character) return (
        <div className="text-center mt-5">
            <h2 className="text-danger">Loading Character...</h2>
        </div>
    );

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 text-center">
                    {/* FIXED: changed people.uid to uid */}
                    <img 
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} 
                        className="img-fluid rounded shadow-lg" 
                        alt={character.name}
                        style={{ maxHeight: "500px" }}
                        onError={(e) => { 
                            e.target.src = "https://starwars-visualguide.com"; 
                        }}
                    />
                </div>
                <div className="col-md-6 text-center px-4">
                    <h1 className="display-3 mb-4">{character.name}</h1>
                    <p className="lead fs-4">
                        A legendary figure in the Star Wars universe, {character.name} has played a pivotal role in the struggle between the light and dark sides of the Force. 
                    </p>
                </div>
            </div>
            
            <hr className="my-5 text-danger border-3" />
            
            <div className="row text-danger text-center fw-bold fs-5">
                <div className="col border-end border-danger">Name<br /><span className="text-dark fw-normal">{character.name}</span></div>
                <div className="col border-end border-danger">Birth Year<br /><span className="text-dark fw-normal">{character.birth_year}</span></div>
                <div className="col border-end border-danger">Gender<br /><span className="text-dark fw-normal">{character.gender}</span></div>
                <div className="col border-end border-danger">Height<br /><span className="text-dark fw-normal">{character.height} cm</span></div>
                <div className="col border-end border-danger">Skin Color<br /><span className="text-dark fw-normal">{character.skin_color}</span></div>
                <div className="col">Eye Color<br /><span className="text-dark fw-normal">{character.eye_color}</span></div>
            </div>

            <div className="text-center mt-5 mb-5">
                <Link to="/starwars" className="btn btn-outline-danger btn-lg">Back to Starwars</Link>
            </div>
        </div>
    );
};
