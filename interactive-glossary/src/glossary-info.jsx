import {useState} from "react";
import './glossary.css';


function GlossaryInfo(props){
    return(
        <>
            <div className = "info-container">
                <div className = "paragraph"> {/*contains the heading and description*/}
                    <h2 className = "title"> <u className = "under-line">
                    {props.title}</u>
                    </h2>
                    <p className = "describe">
                    {props.info}
                    </p>
                </div>
                <div className = "pic">
                    <img className = "img" width = "90%" height = "90%" src = {props.pic}/> {/*added in the image*/}
                </div>
                <div className = "prof-layout">
                    <button onClick = {props.button} className = "prof-btn">Next</button> {/*button for loading the next page*/}
                </div>
            </div>

            <div className = "barrier"></div> {/*creates a barrier separating the info and button menu*/}
        </>
    );
}

export default GlossaryInfo