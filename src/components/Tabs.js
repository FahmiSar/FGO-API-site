import React from "react";

import "../styles/Components.css";

function Tabs({ tabs, activeTab, onClick, containerClass, showSkillName = false}){
    return(
        <div className = {`tabs-container ${containerClass}`}>
            <ul className = "tabs">
                {tabs.map((tab) => (
                    <li key = {tab.id} className = "tab">
                        <div className = {`label ${activeTab === tab ? "active" : ""}`}>
                            <a href = {`#${tab}`} onClick = {() => onClick(tab)}>
                            {/**
                             * the code for this gives me a headache but basically the FGO API organizes skills as an object
                             * we first check if tab is an object if it isn't then we're working for the class header for the
                             * homepage so we need the replace stuff
                             * 
                             * for skills we want to also check if we want to display skill names if we want to show names
                             * then tab.name is shown else we display the skill number
                             */}
                                {typeof tab === "object" ? 
                                    showSkillName ? tab.name : `Skill ${tab.num}` 
                                    : tab.replace("_", " ")}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tabs;