import logo from './logo.svg';
import './App.css';
import './glossary.css';
import {useState} from 'react';
import GlossaryButton from './glossary-button';

function App() {
  
  //array for iterating the button names and info
  const[buttonNames, setButtonNames] = useState([
    {name:"Sequencing",
    description:"Coding in the order that you want your code to run in"},
    {name:"Selection",
    description:""}, 
    {name:"Iteration"},
    {name:"String"}]);


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
          {buttonNames.map((btn)=>{
            return(
              <>
                <GlossaryButton name = {btn.name}/>
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
