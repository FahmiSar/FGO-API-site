import React, {useMemo} from "react";
import {useTable} from "react-table";


function Description({ servant }){

    const columns = useMemo(
        () => [
            {
                accessor: "icon",
                Cell: ({ value }) => <img className = "skill-icon" src = {value} alt = "icon of skill"/>
            },
            {
                accessor: "name"
            },
            {
                accessor: "detail"
            }
        ],
        []
    );

    const data = useMemo(() => servant.skills, [servant.skills]);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
        columns,
        data
    })


    return(
        <div>
            <h1>{servant.name}</h1>
            <p>Base Atk: {servant.atkBase} | Max Atk {servant.atkMax}</p>
            <p>Base Hp: {servant.hpBase} | Max Hp: {servant.hpMax}</p>
            <p>Gender: {servant.gender}</p>
            <p>Star Absorption: {servant.starAbsorb}</p>
            <p>Star Generation: {servant.starGen}</p>
            <p>Instant Death Chance: {servant.instantDeathChance}</p>
            
            <h2>Skills</h2>


        </div>
    );
}

export default Description;