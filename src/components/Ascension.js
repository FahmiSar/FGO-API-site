import React, { useState } from "react";

import Description from "./Description";
import Skills from "./Skills";

function Ascension({ servant }) {
	const ascensionImages = servant.extraAssets.charaGraph.ascension;
    const costumeImages = servant.extraAssets.charaGraph.costume || {};

    const combinedImageArray = [
        ...Object.entries(ascensionImages).map(([key, value]) => ({type: "ascension", key, value})),
        ...Object.entries(costumeImages).map(([key, value]) => ({type: "costume", key, value}))
    ];

	const [currentImage, setCurrentImage] = useState(
		Object.keys(ascensionImages)[0]
	);

	const convertRarityToStars = (rarity) => {
        return "⭐".repeat(rarity)
    };
    

	return (
		<div className="character-banner">
			<Description servant = {servant}/>
			<div className = "picture-container">
				<p className = "rarity-stars">{convertRarityToStars(servant.rarity)}</p>
				{/**Buttons to change the ascension artwork */}
				<div>
					{combinedImageArray.map((item, index) => (
                        
						<button
							className= {`ascension-button ${item.key === currentImage ? "active" : ''}`}
							key={item.key}
							onClick={() => setCurrentImage(item.key)}
						>
							{item.type === "ascension" ? `Stage ${index + 1}` : `Costume ${index - 4 + 1}` }
						</button>
					))}
				</div>
				<div className = "ascension-picture-container">
					<img
						className="ascension-picture"
                        src={combinedImageArray.find(item => item.key === currentImage)?.value}
						alt={`Number ${currentImage}`}
					/>
				</div>
			</div>
			<Skills servant ={servant}/>
		</div>
	);
}

export default Ascension;
