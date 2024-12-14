import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import Ascension from "../components/Ascension";

import "../Style/ServantPage.css";

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
        <div className="container">
            <div className="content">
                <Ascension servant = {servantData}/>
            </div>
        </div>
    );
}

export default ServantPage;