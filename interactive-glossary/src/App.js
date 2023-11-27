import logo from './logo.svg';
import './App.css';
import './glossary.css';
import {useState} from 'react';
import GlossaryButton from './glossary-button';

function App() {
  
  //array for iterating the button names and info
  const[buttonNames, setButtonNames] = useState(["Sequencing", "Selection", "Iteration", "String"]);
  //array for objects to display on the left side of web page
  const[concepts, setConcepts] = useState(
    [
      {
        title:"Sequencing",
        description: "the coding that determines the logical flow of the program."
      },
      {
        title:"Selection",
        description:"The second control structure. Selectively executing a block of code depending on whether the condition is true or not."
      },
      {
        title: "Iteration",
        description:"The third control structure. Continuously executing a block of code if the condition is true."
      },
      {
        title:"String",
        description:"The data type that stores mutiple characters."
      }
    ]
  );
  let exampleItem = {
      title:"Sequencing",
      description:"The coding flow that determines the flow of the program"
    }

  return (
    <div className="App">
      <header className="App-header">
      <div className = "border">
        <div className = "info">
          <div className = "info-container">
            <div className = "paragraph"></div>
            <img className = "pic"></img>
          </div>
        </div>
        <div className = "btn-menu">
          {concepts.map((btn)=>{ //iterating buttons
            return(
              <>
                <GlossaryButton name = {btn.title}/>
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
