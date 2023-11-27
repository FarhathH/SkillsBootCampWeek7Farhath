import {useState} from "react";//allowing us to use useState function
import './ColourButton.css'
function ColourButton(props){ //function for the button
    const[col, setCol] = useState(props.col);

    return(
        <div>
            <button className = "btn" style = {{backgroundColor:col}}></button>
        </div>
    );
}

export default ColourButton