import React, { useState } from "react";

import Tabs from "./Tabs";

function Description({ servant }) {
	const [activeLabel, setActiveLabel] = useState(null);

	const handleClick = (skill) => {
		setActiveLabel(skill);
	};

	return (
		<div>
			<h1>{servant.name}</h1>
			<p>
				Base Atk: {servant.atkBase} | Max Atk {servant.atkMax}
			</p>
			<p>
				Base Hp: {servant.hpBase} | Max Hp: {servant.hpMax}
			</p>
			<p>Gender: {servant.gender}</p>
			<p>Star Absorption: {servant.starAbsorb}</p>
			<p>Star Generation: {servant.starGen}</p>
			<p>Instant Death Chance: {servant.instantDeathChance}</p>

			<h2>Active Skills</h2>
			<Tabs
                tabs = {servant.skills}
                activeTab = {activeLabel}
                onClick = {handleClick}
                containerClass= "skill-container"
            />
		</div>
	);
}

export default Description;
