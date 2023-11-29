import './glossary.css';
import {useState} from 'react';



function GlossaryButton(props){//using props object as a placeholder for array.


    return( //function for returning buttons on the webpage
        <>
            <button style = {{backgroundColor:props.complete ? "grey":"beige"}} //set a props condition to change the button colour when clicking the 'next' button
                className = "btn" onClick = {() => props.action(props.index)}>
                <strong>{props.name}</strong>
            </button>
        </>
    );
}

export default GlossaryButton