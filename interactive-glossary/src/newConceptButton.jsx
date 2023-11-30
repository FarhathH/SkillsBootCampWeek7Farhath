import {useState} from "react";
import './glossary-info.css';
import './glossary-button.css';


function AddInfoButton(props){ //our button for adding
    return(
        
            <button onClick = {()=>props.togglePage(false)} className = "add-btn">
                +
            </button>
        
    );
}

export default AddInfoButton;
