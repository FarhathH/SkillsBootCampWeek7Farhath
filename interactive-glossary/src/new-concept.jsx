import './glossary-button.css';
import './glossary-info.css';
import {useState} from 'react';
import AddInfoButton from './newConceptButton';


function NewFileAdd(props){
    return(
        <>
            <div className = "info-container">
                <AddInfoButton
                    togglePage = {props.togglePage} //the button to take us back to the glossary page.
                />
                <div className = "paragraph"> {/*contains the heading and description*/}
                    <h2 className = "title"> 
                        <u className = "under-line">
                            <h1>Add New</h1> {/*The main title*/}
                        </u>
                    </h2>

                    <p className = "describe">
                        {/*User can insert info*/}
                        <textarea type = "text" placeholder='Concept title' className = "img">
                            {props.insertTitle}
                        </textarea>
                    </p>

                    <p className = "describe">
                        {/*second text box to input info*/}
                        <textarea type = "text" placeholder='Description' className = "img">
                            {props.insertDescription}
                        </textarea>
                    </p>

                    

                   
                </div>

                <div className = "new-pic">

                    <div className = "new-layout">
                        <button className = "new-btn">SUBMIT</button> {/*button for submiting what the user input*/}
                    </div>
                
                </div>

              
            </div>

            <div className = "barrier"></div> {/*creates a barrier separating the info and button menu*/}
        </>
    );
}

export default NewFileAdd;