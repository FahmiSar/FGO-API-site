import React from "react";
import ClassHeader from "../components/ClassHeader";
import ServantTable from "../components/ServantTable";

function Homepage(){

    return(
        <>
            <div className="container">
                <div className="content">
                    <ClassHeader/>
                    <ServantTable/>
                </div>
            </div>
        </>
    );
}

export default Homepage;