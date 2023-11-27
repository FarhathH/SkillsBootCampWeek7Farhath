import {useState} from "react";//allowing us to use useState function

function ColourButton(){ //function for the button
    const[col, setCol] = useState("red");

    return(
        <div>
            <button style = {{background:col}}></button>
        </div>
    );
}

export default ColourButton