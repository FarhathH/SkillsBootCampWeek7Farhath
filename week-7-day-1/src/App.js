import logo from './logo.svg';
import './App.css';
import ColourButton from './ColourButton.jsx'; //exported the button file
import {useState} from 'react'; //to allow us to use useState function

function App() {

  //list and background for colours
  const[colourList, SetColourList]=useState(["black", "hotpink", "blue", "orange", "limegreen", "red"]);
  const[backGround, setBackGround]=useState('#282c34');



  return (
    <div className="App">
      <header className="App-header" style = {{backgroundColor:backGround}}> {/*background colour is set to */}

        {colourList.map((col)=>{
          return(
            <div>
              <ColourButton colour = {col} newColorBackground = {setBackGround}/> {/*changes background when button is clicked*/}
            </div>
          );
        })}
        
      </header>
    </div>
  );
}

export default App;
