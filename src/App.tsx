/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FormEvent } from 'react';
import './App.css';

function App() {
  console.log("Render");
  //let FahreheitValue = 0;
  const [FahreheitValue,setFahreheitValue] = React.useState(0);
  let Celsius = 0;
  function myFunction(event: FormEvent<HTMLInputElement>){
    event.currentTarget.valueAsNumber;
    console.log("Celsius",Celsius);
  }
  function myClickFunction(){
    setFahreheitValue(Celsius*(9/5)+32);
  }
  return (
    <div>
      <h3>Temperature Calcuator</h3>
      <div>
        Celsius: <input onInput={myFunction} type="Number" />
      </div>
      <div>Fahreheit: {FahreheitValue}</div>
      <button onClick={myClickFunction}> Convert</button>
    </div>
  );
}

export default App;
