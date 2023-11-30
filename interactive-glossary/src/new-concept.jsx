import './glossary-button.css';
import './glossary-info.css';
import {useState} from 'react';


function NewFileAdd(props){
    return(
        <>
            <div className = "info-container">
                <div className = "paragraph"> {/*contains the heading and description*/}
                    <h2 className = "title"> 
                        <u className = "under-line">
                            <h1>Add New</h1> {/*The main title*/}
                        </u>
                    </h2>

                    <p className = "describe">
                        {/*User can insert info*/}
                        <textarea type = "text" placeholder='Concept title' className = "img"/>
                    </p>

                    <p className = "describe">
                        {/*second text box to input info*/}
                        <textarea type = "text" placeholder='Description' className = "img"/> 
                    </p>

                    

                   
                </div>

                <div className = "pic">

                    <div className = "prof-layout">
                        <button className = "prof-btn">SUBMIT</button> {/*button for submiting what the user input*/}
                    </div>
                
                </div>

              
            </div>

            <div className = "barrier"></div> {/*creates a barrier separating the info and button menu*/}
        </>
    );
}

export default NewFileAdd;