import React, { useState } from "react";

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
    

	return (
		<div className="characterBanner">
			<div>description</div>
			<div className = "pictureContainer">
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
				<div>
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
