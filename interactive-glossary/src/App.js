import logo from './logo.svg';
import './App.css';
import './glossary.css';
import {useState} from 'react';
import GlossaryButton from './glossary-button';

//imported my images from my file to be put in an array.
import sequence from './images/sequencing.jpg';
import selection from './images/selection.jpg';
import iteration from './images/iteration.jpg';
import string from './images/string.jpg';

function App() {
  
  //array for iterating the button names and info
  const[buttonNames, setButtonNames] = useState(["Sequencing", "Selection", "Iteration", "String"]);
  //array for objects to display on the left side of web page
  //have also inserted
  const[concepts, setConcepts] = useState(
    [
      {
        title:"Sequencing",
        description: "the coding that determines the logical flow of the program.",
        picture:sequence
      },
      {
        title:"Selection",
        description:"The second control structure. Selectively executing a block of code depending on whether the condition is true or not.",
        picture:selection
      },
      {
        title: "Iteration",
        description:"The third control structure. Continuously executing a block of code if the condition is true.",
        picture:iteration
      },
      {
        title:"String",
        description:"The data type that stores mutiple characters.",
        picture:string
      }
    ]
  );
  
  //stores the title and description objects
  const[selectedItem, setSelectedItem] = useState({title:"", description:"", picture:""})

  function OnButtonClick(index){
    setSelectedItem(concepts[index])
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className = "border">
          <div className = "info">
            <div className = "info-container">
              <div className = "paragraph">
                <h2 className = "title">{selectedItem.title}</h2>
                <p className = "describe">{selectedItem.description}</p>
              </div>
              <div className = "pic">
                <img width = "90%" height = "90%" src = {selectedItem.picture}></img> {/**/}
              </div>
            </div>
          </div>
          <div className = "line">
              <div className = "barrier"></div> {/*creates a barrier separating the info and button menu*/}
            </div>
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
