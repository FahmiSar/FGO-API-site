import React from "react";


function Tabs({ tabs, activeTab, onClick, containerClass}){
    return(
        <div className = {`tabs-container ${containerClass}`}>
            <ul className = "tabs">
                {tabs.map((tab) => (
                    <li key = {tab} className = "tab">
                        <div className = {`label ${activeTab === tab ? "active" : ""}`}>
                            <a href = {`#${tab}`} onClick = {() => onClick(tab)}>
                                {typeof tab === "object" ? `Skill ${tab.num}` : tab.replace("_", " ")}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tabs;