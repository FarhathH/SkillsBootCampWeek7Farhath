import logo from './logo.svg';
import './App.css';
import './glossary.css';
import {useState} from 'react';
import GlossaryButton from './glossary-button'; //imported the function from the jsx file

//imported my images from my file to be put in an array.
import sequence from './images/sequencing.jpg';
import selection from './images/selection.jpg';
import iteration from './images/iteration.jpg';
import string from './images/string.jpg';

function App() {
  
  //array for iterating the button names and info
  const[buttonNames, setButtonNames] = useState(["Sequencing", "Selection", "Iteration", "String"]);
  
  const[selectedConcept, setSelectedConcept] = useState("");

  //array for objects to display on the left side of web page
  //have also inserted images in the array to display
  const[concepts, setConcepts] = useState(
    [
      {
        title:"Sequencing",
        description: `The coding that determines the logical flow of the program.`,
        picture:sequence
      },
      {
        title:"Selection",
        description:`The second control structure. Selectively executing a 
        block of code depending on whether the condition is true or not.`,
        picture:selection
      },
      {
        title: "Iteration",
        description:`The third control structure. Continuously executing a
        block of code if the condition is true.`,
        picture:iteration
      },
      {
        title:"Variable",
        description:`A piece of data that stores information.`,
        picture:string
      },
    ]
  );
  
  //stores the title and description objects
  const[selectedItem, setSelectedItem] = useState({title:"", description:"", picture:""})

  //executes when the user clicks a button
  function OnButtonClick(index){
    setSelectedItem(concepts[index])

  }

  //triggered via mouse click
  function NextItem(){
    //to get the current index
    let index = concepts.indexOf(selectedItem) + 1

    if(index < concepts.length){ //changing the index depending on the condition
      setSelectedItem(concepts[index])
    }else{
      setSelectedItem(concepts[0]) //goes back to the first button when index exceeds the array length.
    }
    
  }

  return ( //this runs on the webpage
    <div className="App">
      <header className="App-header">
        <div className = "border">
          <div className = "info">
            <div className = "info-container">
              <div className = "paragraph"> {/*contains the heading and description*/}
                <h2 className = "title"> <u className = "under-line">
                  {selectedItem.title}</u>
                </h2>
                <p className = "describe">
                  {selectedItem.description}
                </p>
              </div>
              <div className = "pic">
                  <img width = "90%" height = "90%" src = {selectedItem.picture}/> {/*added in the image*/}
              </div>
              <div className = "prof-layout">
                  <button onClick = {NextItem} className = "prof-btn">Next</button> {/*button for loading the next page*/}
              </div>
            </div>
          </div>
          
          <div className = "barrier"></div> {/*creates a barrier separating the info and button menu*/}
          
          <div className = "btn-menu">
            {concepts.map((btn, index)=>{ //iterating buttons and info with parameters
              return(
                <>
                  <GlossaryButton name = {btn.title} action = {OnButtonClick} index = {index}/> {/*a click calls the index of the title and description*/}
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
