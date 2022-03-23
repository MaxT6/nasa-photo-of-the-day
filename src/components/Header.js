import React from "react";

const Header = props => {
    return (
        <div className='header'>
            <h1> {props.headerTitle.title} </h1>
            <h3>{props.headerDate.date}</h3>
        </div>
        
    )
}

export default Header;