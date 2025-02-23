import React from "react";

import "../styles/Components.css";

import quickCardImage from "../images/Quick.png";
import artsCardImage from "../images/Arts.png";
import busterCardImage from "../images/Buster.png";

function Description({ servant }) {

	/**
	 * If the attribute of the servant is human in the API's data we'll change it to Man to better
	 * fit the naming ingame. Otherwise we just capitalize the first letter and serve it as is
	 */
	const attribute = servant.attribute === "human"
		? "Man" : servant.attribute.charAt(0).toUpperCase() + servant.attribute.slice(1); 

	const alignment = servant.traits
				.filter(trait => trait.name.includes("alignment"))
				.map(trait => trait.name.replace("alignment", " "));

	/**This whole block will give us cardCount in the form of {quick: x, arts: y, buster: z} 
	 * Does NOT include NP card type
	*/
	const cardCount = servant.cards.reduce((counts, card) =>{
		counts[card] = (counts[card] || 0) + 1;
		return counts;
	}, {});

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
						<b>Star Generation:</b> {servant.starGen / 10}{"%"}
					</p>
					{/**
					 * the line for gender is just taking the first character and making it uppercase so it'll appear
					 * as Male/Female instead of male/female
					 */}
					<p>
						<b>Gender:</b> {servant.gender.charAt(0).toUpperCase() + servant.gender.slice(1)}
					</p>
				</div>
				
				{/**Command Cards box */}
				<div className = "command-card-container">
					{/**
					 * map() takes two parameters (current item, index of current item)
					 * we don't care for the current item (since its a number) so we use _
					 * to show we're ignoring
					 * 
					 * also when using "map(() => {})" be mindful cause doing {} requires a "return"
					 * () doesn't explicitly require one
					 */}
					{/**Quick Cards */}
					{Array.from({ length: cardCount.quick}).map((_,index) => (
						<img className = "command-card" key={index} src={quickCardImage} alt="Quick Card" />
					))}
					{/**Arts Cards */}
					{Array.from({length: cardCount.arts}).map((_,index) =>(
						<img className = "command-card" key={index} src={artsCardImage} alt = "Arts Card"/>
					))}
					{/**Buster Cards */}
					{Array.from({length: cardCount.buster}).map((_,index) =>(
						<img className = "command-card" key={index} src={busterCardImage} alt = "Buster Card"/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Description;
