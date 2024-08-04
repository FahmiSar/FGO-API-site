import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import Ascension from "../components/Ascension";

function ServantPage(){
    const {name} = useParams(); // this'll get the "name" part of the URL
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const formattedName = name.replace(/_/g, " ");

    useEffect(
        () => {
        // This will retrive the full data and store it in the state
        fetch("https://api.atlasacademy.io/export/NA/nice_servant.json")
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            setLoading(false);
        })
        },
        []
    );

    if (loading) return <div>Loading...</div>;

    // This sorta creates like an item for easier access to info about the character
    const servant = data.find(character => character.name === formattedName);

    return(
        <>
            <div className="container">
                <div className="content">
                    <Ascension servant = {servant}/>
                </div>
            </div>
        </>
    );
}

export default ServantPage;