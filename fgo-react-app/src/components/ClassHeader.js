import React, {useState, useContext} from "react";
import { Context } from "../App"; 

function ClassHeader(){
    const {activeLabel, setActiveLabel} = useContext(Context);
    const {servant_classes} = useContext(Context);

    const handleClick = (label) =>{
        setActiveLabel(label);
    };

    return(
        <div className="class-tabs-container" style={{ backgroundColor: 'blue' }}>
            <ul className = "class-tabs">
                {servant_classes.map((tab) => (
                    <li key={tab} className ="tabs">
                        {/*below this div line is equal to setting the div to have className = "label active" or className = "label" */}
                        <div className={`label ${activeLabel === tab ? "active" : ""}`}>
                            <a href={`#${tab}`} onClick = {() => handleClick(tab)}>
                                {tab.replace('_', ' ')}
                            </a>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default ClassHeader;