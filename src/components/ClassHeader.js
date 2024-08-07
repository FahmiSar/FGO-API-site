import React, {useState, useContext} from "react";
import { Context } from "../App"; 

import Tabs from "./Tabs";

function ClassHeader(){
    const {activeLabel, setActiveLabel} = useContext(Context);
    const {servant_classes} = useContext(Context);

    const handleClick = (label) =>{
        setActiveLabel(label);
    };

    return(
        <Tabs
            tabs = {servant_classes}
            activeTab = {activeLabel}
            onClick = {handleClick}
            containerClass = ""
        />
    );
}

export default ClassHeader;