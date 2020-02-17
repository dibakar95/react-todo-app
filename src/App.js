import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './App.css';

function App() {
  return (
    <div className="App">
    <Button variant="contained" color="primary">
    Hello World
  </Button>
  <div>
  <Input variant="contained" color="primary" type ="text"></Input>
  </div>

    </div>
  );
}

export default App;
