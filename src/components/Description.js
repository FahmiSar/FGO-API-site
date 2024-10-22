import React from "react";

import "./Components.css";

function Description({ servant }) {

	const attribute = servant.attribute === "human"
		? "Man" : servant.attribute.charAt(0).toUpperCase() + servant.attribute.slice(1); 

	const alignment = servant.traits
				.filter(trait => trait.name.includes("alignment"))
				.map(trait => trait.name.replace("alignment", " "));


	return (
		<div className="description-box">
			<div className="character-stats">
				<h1>{servant.name}</h1>
				<div className="stats">
					<p>
						<b>ID:</b> {servant.collectionNo}
					</p>
					<p>
						<b>Cost:</b> {servant.cost}
					</p>
					<p>
						<b>ATK/Max ATK:</b> {servant.atkBase}{"/"}{servant.atkMax}
					</p>
					<p>
						<b>HP/Max HP:</b> {servant.hpBase}{"/"}{servant.hpMax}
					</p>
					{/**
					 * the line for gender is just taking the first character and making it uppercase so it'll appear
					 * as Male/Female instead of male/female
					 */}
					<p>
						<b>Alignment:</b> {alignment}
					</p>
					<p>
						<b>Attribute:</b> {attribute}
					</p>
					<p>
						<b>Star Absorption:</b> {servant.starAbsorb}
					</p>
					<p>
						<b>Star Generation:</b> {servant.starGen}{"%"}
					</p>
					<p>
						<b>Gender:</b> {servant.gender.charAt(0).toUpperCase() + servant.gender.slice(1)}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Description;
