import React from "react";
import NameCard from "../NameCard/NameCard";
import './Results.css';

const Results = ({ suggestedNames }) => {
    const suggestedNamesJSX = suggestedNames.map((suggestedName) => {
        return <NameCard suggestedName={suggestedName}></NameCard>
    })
    return (
        <div className="results-container">
            <p>{suggestedNamesJSX}</p>
        </div>
    )
}

export default Results;