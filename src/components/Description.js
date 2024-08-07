import React, { useState } from "react";

import Tabs from "./Tabs";

function Description({ servant }) {
	const [activeSkill, setActiveSkill] = useState(null);

	const handleClick = (skill) => {
		setActiveSkill(skill);
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
			<div className="skill-details-div">
				<Tabs
					tabs={servant.skills}
					activeTab={activeSkill}
					onClick={handleClick}
					containerClass="skill-container"
				/>

				{activeSkill && typeof activeSkill === "object" && (
					<div>
						<table className = "skill-detail-table">
							<tbody>
								<tr>
									<td className = "skill-header">
                                        <div className = "skill-icon-wrapper">
                                            <img className = "skill-icon" src = {activeSkill.icon} alt = ""/>
                                        </div>
                                        <div className = "skill-name-wrapper">
                                            <p>{activeSkill.name}</p>
                                        </div>
                                    </td>
								</tr>
                                <tr>
                                    <td>
                                        <div className = "skill-detail-wrapper">
                                            <p>{activeSkill.detail}</p>
                                        </div>
                                    </td>
                                </tr>
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
}

export default Description;
