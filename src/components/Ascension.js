import React, { useState } from "react";

import Description from "./Description";

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
		<div className="characterBanner">
			<Description servant = {servant}/>
			<div className = "pictureContainer">
				<p className = "rarity-stars">{convertRarityToStars(servant.rarity)}</p>
				<div>
					{combinedImageArray.map((item, index) => (
                        
						<button
							className= {`ascensionButton ${item.key === currentImage ? "active" : ''}`}
							key={item.key}
							onClick={() => setCurrentImage(item.key)}
						>
							{item.type === "ascension" ? `Stage ${index + 1}` : `Costume ${index - 4 + 1}` }
						</button>
					))}
				</div>
				{/**The width for the div changes the size of the img without the weird
				 * aspect ratio changing the width of the img does 
				 * I'll need a className or something when I work on responsive design
				 */}
				<div style = {{width: "85%"}}>
					<img
						className="ascensionPicture"
                        src={combinedImageArray.find(item => item.key === currentImage)?.value}
						alt={`Number ${currentImage}`}
					/>
				</div>
			</div>
		</div>
	);
}

export default Ascension;
