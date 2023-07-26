import './App.css';
import Bar from './components/Bar'
import Display from './components/Display';
import { useState } from 'react';




function App() {

  const [ state, setState] = useState();

  const getData = (btnName) => {
    fetchData(btnName);
  }

  const fetchData = async (btnName) => {
    try {
      let response = null;
      if (btnName === "banglore") {
        response = await fetch("http://127.0.0.1:8000/data");
      }
      if (btnName === "delhi") {
        response = await fetch("http://127.0.0.1:8001/data");
      }
      if (btnName === "kolkata") {
        response = await fetch("http://127.0.0.1:8002/data");
      }
      
      const jsonData = await response.json();
      jsonData.timeStamp= new Date() 
      setState(jsonData);
    }
    catch (error) {
      // console.error('Error fetching data:', error);
      const errMessage = `${btnName} server is down. Please try again later.`;
      const msg = {
        error: errMessage,
      }
      setState(msg);

    }
  }
  


  return (
    <div className="App">
      <h1>Weather App</h1>
      <Bar test={getData}/>
      <div className='board'>
      {state ? <Display temp={state}/> : null}  
      
      </div>
     

    </div>
  );
}

export default App;
