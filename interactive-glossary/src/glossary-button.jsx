import './glossary.css'
import {useState} from 'react'



function GlossaryButton(props){//using props object as a placeholder for array.


    return( //function for returning buttons on the webpage
        <>
            <button className = "btn" onClick = {() => props.action(props.index)}><strong>{props.name}</strong></button>
        </>
    );
}

export default GlossaryButton