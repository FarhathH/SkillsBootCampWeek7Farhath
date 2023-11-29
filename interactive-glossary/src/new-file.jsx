import './glossary-button.css';
import './glossary-info.css';
import {useState} from 'react';


function NewFileAdd(props){
    return(
        <>
            <div className = "info-container">
                <div className = "paragraph"> {/*contains the heading and description*/}
                    <h2 className = "title"> <u className = "under-line">
                        Add New</u>
                    </h2>
                    <p className = "describe">
                        <b>Title</b>
                    </p>

                    <div className = "pic">
                        <textarea className = "img"></textarea>
                    </div>

                    <p className = "describe">
                        <b>Description</b>
                    </p>

                   
                </div>

                <div className = "pic">
                    <textarea className = "img"></textarea> 
                </div>
                
                <div className = "prof-layout">
                    <button onClick = {props.button} className = "prof-btn">SUBMIT</button> {/*button for loading the next page*/}
                </div>
            </div>

            <div className = "barrier"></div> {/*creates a barrier separating the info and button menu*/}
        </>
    );
}

export default NewFileAdd;