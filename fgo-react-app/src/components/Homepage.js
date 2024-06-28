import React from "react";
import ClassHeader from "./ClassHeader";
import ServantTable from "./ServantTable";

function Homepage(){

    return(
        <>
            <div className="container">
                <ClassHeader/>
                <ServantTable/>
            </div>
        </>
    );
}

export default Homepage;