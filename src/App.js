import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import './assets/sass/style.css';
import { GetComics } from './components/GetComics';


function App() {

  const [value, setValue] = useState(1);
  return (
    <div className="App">
      <header className="App-header">        
        <GetComics /><br/>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </header>
    </div>
  );
}

export default App;
