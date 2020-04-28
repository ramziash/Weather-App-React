import React, { useEffect } from 'react';
import './App.css';
import CityForcast from './components/CityWeather';


function App() {

  useEffect( ()=> {
    document.title = 'Weather Forcast'
  }, []);

  return (
    <div className="App">

      <h1 style={{textAlign : 'center', padding : '1em'}}> Weather Forcast</h1>
      <CityForcast/>

    </div>
  );
}

export default App;