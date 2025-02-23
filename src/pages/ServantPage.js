import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import Description from "../components/Description";
import Skills from "../components/Skills";
import Portrait from "../components/Portrait";

import "../styles/ServantPage.css";

function ServantPage(){
    const {id} = useParams(); // this'll get the "name" part of the URL
    const [servantData, setServantData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
        fetch(`https://api.atlasacademy.io/nice/NA/servant/${id}`)
        .then(response => response.json())
        .then(data => {
            setServantData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            setLoading(false);
        })
        },
        [id]
    );

    if (loading) return <div>Loading...</div>;

    return(
        <div className="background-container">
            <div className="character-container">
                <Description servant = {servantData}/>
                <Portrait servant = {servantData}/>
                <Skills servant ={servantData}/>
            </div>
        </div>
    );
}

export default ServantPage;