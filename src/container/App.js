import React, { useState } from 'react';
import './App.css';
import Result from '../components/Result/Result';
import Keypad from '../components/Keypad/Keypad';
//import log4js from 'log4js';


function App() {

  let [result, setResult] = useState('');
  
  // log4js.configure({
  //     appenders: {cheese: {type: "file", filename: "logs.js"}},
  //     categories: { default: {appenders: ["cheese"], level: "info"}}
  // });
  // const logger = log4js.getLogger("cheese");

  const onClick = button => {
    
    if(button === "clear"){
        //logger.info("I am inside clear button");
        backSpace(); 
    }
    else if (button === "=" ){
        //logger.info("I am inside = button");
        calculate();
    }
    else{
        //logger.info("I am inside buttons");
        setResult(
            result + button
        )
    }
} 

const calculate = () => {
    try {
        setResult(
            // eslint-disable-next-line
            eval((result) || "") + ""
        )
    }
    catch (e){
        setResult(() => e)
    }
}

const backSpace = () => {
    setResult(
        result.slice(0, -1)
    )
}



  return (
    <div className="App">
      <h1>Simple Calculator App</h1>
      <Result 
        userResult={result}/>
      <Keypad 
        onClick= {onClick}/>
    </div>
  );
}

export default App;
