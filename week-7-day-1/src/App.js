import logo from './logo.svg';
import './App.css';
import ColourButton from './ColourButton.jsx'; //exported the button file
import {useState} from 'react'; //to allow us to use useState function

function App() {

  //list and background for colours
  const[colourList, SetColourList]=useState(["black", "hotpink", "blue", "orange", "limegreen", "red"]);
  //created an useState function for changing the background
  const[backGround, setBackGround]=useState('#282c34');



  return (
    <div className="App">
      <header className="App-header" style = {{backgroundColor:backGround}}> {/*applied the props object for the background colour */}
        <div className = "row-ur-boat">
          {colourList.map((col)=>{
            return(
              <div className = "row-ur-boat">
                <ColourButton colour = {col} newColorBackground = {setBackGround}/> {/*changes background when button is clicked by referencing the useState function*/}
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
