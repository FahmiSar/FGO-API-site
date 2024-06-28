import React, {useContext, useState, useEffect, useMemo} from "react";
import {Context} from "../App";
import { useTable } from "react-table";

function ServantTable(){
    const {activeLabel, servant_classes} = useContext(Context);
    const [servantInfo, setServantInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(
        () => {
            fetch("https://api.atlasacademy.io/export/NA/basic_servant.json")
            .then(response => response.json())
            .then(data => {
                setServantInfo(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            })
        },
        []
    );

    const columns = useMemo(
        () => [
            {
                Header: "Icon",
                accessor: "face",
                Cell: ({ value }) => <img className="servantPicture" src={value} alt="Icon" />,
            },
            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Rarity",
                accessor: "rarity",
                Cell: ({value}) => "⭐".repeat(value),
            },
            {
                Header: "ID",
                accessor: "collectionNo",

            },
        ], 
        []
    );

    /**
     * to explain this function we'll use the label Alter_Ego
     * first it converts to lowercase and splits it putting it into an array
     * ["alter", "ego"]
     * then we have the word and the index of the word in the array
     * if index is 0 we keep it unchanged (alter)
     * else index > 0 we take the first letter of the word convert it to uppercase
     * along with slice out the rest of the word to tac on so "ego" becomes "Ego"
     * then .join("") to combine the array elements as one without a space 
     */
    const convertToCamelCase = (label) => {
        return label.toLowerCase().split("_").map((word, index) => {
            if(index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join("");
    };

    const filteredServants = useMemo(
        () => {
            if(!activeLabel) return [];
            const formattedLabel = convertToCamelCase(activeLabel);
            console.log(formattedLabel);
            return servantInfo.filter(servant => servant.className === formattedLabel);
        }, 
        [activeLabel, servantInfo]
    );

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
        columns, 
        data: filteredServants,
    });


    return (
        <div className = "data-div">
            {filteredServants.length > 0 ? (
                <table  {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <></>
            )}
        </div>
    );
    
}


export default ServantTable;