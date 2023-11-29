import logo from './logo.svg';
import './App.css';

//my stylesheets
import './glossary-info.css';
import './glossary-button.css';

import {useState} from 'react';
import GlossaryButton from './glossary-button.jsx'; //imported the function from the jsx file
import GlossaryInfo from './glossary-info.jsx';

//imported my images from my file to be put in an array.
//will be used as an alias
import sequence from './images/sequencing.jpg';
import selection from './images/selection.jpg';
import iteration from './images/iteration.jpg';
import string from './images/string.jpg';
import stringInterpolation from './images/string-interpolation.jpg';

function App() {
  
  //array for iterating the button names and info
  const[buttonNames, setButtonNames] = useState(["Sequencing", "Selection", "Iteration", "String"]);
  

  //array for objects to display on the left side of web page
  //have also inserted images in the array to display
  const[concepts, setConcepts] = useState(
    [
      {
        title:"Sequencing",
        description: `The coding that determines the logical flow of the program.`,
        picture:sequence,
        complete:false
      },
      {
        title:"Selection",
        description:`The second control structure. Selectively executing a 
        block of code depending on whether the condition is true or not.`,
        picture:selection,
        complete:false
      },
      {
        title: "Iteration",
        description:`The third control structure. Continuously executing a
        block of code if the condition is true.`,
        picture:iteration,
        complete:false
      },
      {
        title:"Variable",
        description:`A piece of data that stores information.`,
        picture:string,
        complete:false
      },
      {
        title:` String interpoliation`,
        description:`Put in a data value as a 
        placeholder in a string.`,
        picture:stringInterpolation,
        complete:false
      }
    ]
  );
  
  //stores the title and description objects
  const[selectedItem, setSelectedItem] = useState(concepts[0])
  
  //useState for counter
  const[counter, setCounter] = useState(0);
  
  
  //executes when the user clicks a button
  function OnButtonClick(index){
    setSelectedItem(concepts[index])
  }

  //triggered via mouse click
  function NextItem(){

    //to get the current index
    let index = concepts.indexOf(selectedItem)

     //set up the variables for the bool value in the concepts array.
    let temp = [...concepts]
    temp[index].complete = true
    console.log(temp)
    setConcepts(temp)

    

    if(counter < concepts.length){
      setCounter(counter+1) //increase counter
    }else{
      setCounter(counter-5) //resets counter
    }
   
    



    if(index + 1 < concepts.length){ //changing the index depending on the condition
      setSelectedItem(concepts[index + 1])
      
      
    }else{
      setSelectedItem(concepts[0]) //goes back to the first button when index exceeds the array length.
      
    }
    
  }

  return ( //this runs on the webpage
    <div className="App">
      <header className="App-header">

        <div className = "border">

          <div className = "info">
            <GlossaryInfo 
              title = {selectedItem.title}
              info = {selectedItem.description}
              pic = {selectedItem.picture}
              button = {NextItem}
            />
          </div>
          
          <div className = "btn-menu">

            <div style = {{color:"black"}} className = "counter">{counter}/{concepts.length}</div>
            {concepts.map((btn, index)=>{ //iterating buttons and info with parameters
              return(
                <>
                  <GlossaryButton name = {btn.title} 
                    action = {OnButtonClick} 
                    index = {index}
                    complete = {btn.complete} //this is called on the function render to that the 'complete' object can change to true with a button click.
                  /> {/*a click calls the index of the title and description*/}
                </>
              );
            })}
            
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
