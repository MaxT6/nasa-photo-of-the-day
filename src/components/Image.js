import React from "react";

const Image = props => {
    return (
        <div className="image">
            <img src = {props.bodyImage.hdurl} alt = 'NASA picture of the day'></img>
            <p>{props.exp.explanation}</p>
        </div>
    )
}

export default Image;