import {useState} from "react";//allowing us to use useState function
import './ColourButton.css'//my stylesheet

function ColourButton(){ //function for the button

    
    const[col, setCol] = useState(["black", "hotpink", "blue", "orange", "limegreen", "red"]);

    return(
        
        <div>
            {col.map((colour)=>{
                return(
                    <button className = "btn" style = {{backgroundColor:colour}}>
                        {colour}
                    </button>
                );
            })}
            
        </div>
    );

}

export default ColourButton