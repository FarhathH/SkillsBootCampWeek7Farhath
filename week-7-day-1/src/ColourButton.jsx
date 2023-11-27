import {useState} from "react";//allowing us to use useState function
import './ColourButton.css'//my stylesheet

function ColourButton(props){ //function for the button

    
    const[col, setCol] = useState(props.colour); //useState for the colour button
   
   {/*this is executed on the page*/}
    return(
        //onclick function using the props object to change the colour of the background each time the user clicks a button
        <div> 
            <button className = "btn" style = {{backgroundColor:col}} onClick={()=>{props.newColorBackground(col)}}>
                {col}
            </button>    
        </div>
    );

}

export default ColourButton