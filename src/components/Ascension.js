import React, { useState } from "react";

function Ascension({ servant }) {
	const ascensionImages = servant.extraAssets.charaGraph.ascension;
    const costumeImages = servant.extraAssets.charaGraph.costume;

	const [currentImage, setCurrentImage] = useState(
		Object.keys(ascensionImages)[0]
	);

	return (
		<div className="characterBanner">
			<div>description</div>
			<div className = "pictureContainer">
				<div>
					{Object.keys(ascensionImages).map((key, index) => (
						<button
							className= {`ascensionButton ${key === currentImage ? "active" : ''}`}
							key={key}
							onClick={() => setCurrentImage(key)}
						>
							Stage {index + 1}
						</button>
					))}
				</div>
				<div>
					<img
						className="ascensionPicture"
						src={ascensionImages[currentImage]}
						alt={`Ascension ${currentImage}`}
					/>
				</div>
			</div>
		</div>
	);
}

export default Ascension;
