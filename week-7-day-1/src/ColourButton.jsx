import {useState} from "react";//allowing us to use useState function
import './ColourButton.css'//my stylesheet

function ColourButton(props){ //function for the button

    
    const[col, setCol] = useState(props.colour);

    function buttonClick(){
        return(
            <header style = {{backgroundColor:col}}></header>
        );
    };

    return(
        
        <div> 
            <button onClick={buttonClick} className = "btn" style = {{backgroundColor:col}}>
                {col}
            </button>    
        </div>
    );

}

export default ColourButton