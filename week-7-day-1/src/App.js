import logo from './logo.svg';
import './App.css';
import ColourButton from './ColourButton.jsx';
import {useState} from 'react';

function App() {

  const[colourList, SetColourList]=useState(["black", "hotpink", "blue", "orange", "limegreen", "red"]);

  return (
    <div className="App">
      <header className="App-header">

        {colourList.map((col)=>{
          return(
            <div>
              <ColourButton colour = {col}/>
            </div>
          );
        })}
        
      </header>
    </div>
  );
}

export default App;
