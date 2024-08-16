import React, { useState } from "react";

import Tabs from "./Tabs";

function Description({ servant }) {
	const [activeSkill, setActiveSkill] = useState(null);
	const [activeExtraSkill, setActiveExtraSkill] = useState(null);
	const [extraSkills, setExtraSkills] = useState([]);

	const skillOne = servant.skills.filter((skill) => skill.num === 1);
	const skillTwo = servant.skills.filter((skill) => skill.num === 2);
	const skillThree = servant.skills.filter((skill) => skill.num === 3);

	const initalSkills = [skillOne[0], skillTwo[0], skillThree[0]];

	const handleExtra = (skill) => {
		setActiveExtraSkill(skill);
	}

	const handleClick = (skill) => {
		setActiveSkill(skill);

		const num = skill.num;
		let extra = [];

		if (num === 1 && skillOne.length > 1) {
			extra = skillOne.slice(0);
		} else if(num === 2 && skillTwo.length > 1){
			extra = skillTwo.slice(0);
		} else if(num === 3 && skillThree.length > 1){
			extra = skillThree.slice(0);
		}


		setExtraSkills(extra);
		setActiveExtraSkill(extra[0] || null);
	};

	const skillToDisplay = extraSkills.length > 0 && activeExtraSkill ? activeExtraSkill : activeSkill;

	return (
		<div className = "description-box">
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
			</div>

			<div className="skill-details-div">
			<h2>Active Skills</h2>
				<Tabs
					tabs={initalSkills}
					activeTab={activeSkill}
					onClick={handleClick}
					containerClass="skill-container"
				/>

				{activeSkill && typeof activeSkill === "object" && (
					<div>
						{extraSkills.length > 0 && (
							<Tabs
								tabs={extraSkills}
								activeTab={activeExtraSkill}
								onClick={handleExtra}
								containerClass="skill-container"
								showSkillName = {true}
							/>
						)}

						<table className="skill-detail-table">
							<tbody>
								<tr>
									<td className="skill-header">
										<div className="skill-icon-wrapper">
											<img
												className="skill-icon"
												src={skillToDisplay.icon}
												alt=""
											/>
										</div>
										<div className="skill-name-wrapper">
											<p>{skillToDisplay.name}</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="skill-detail-wrapper">
											<p>{skillToDisplay.detail}</p>
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
