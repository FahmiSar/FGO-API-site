import React from "react";
import ClassHeader from "./ClassHeader";
import ServantTable from "./ServantTable";

function Homepage(){

    return(
        <>
            <div className="container">
                <div className="main-page">
                    <ClassHeader/>
                    <ServantTable/>
                </div>
            </div>
        </>
    );
}

export default Homepage;