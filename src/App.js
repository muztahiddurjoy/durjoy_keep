import React,{useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componenets/NavBar';
import AddNote from './componenets/AddNote';
function App() {
  
  return (
  <React.Fragment>
  <NavBar/>
  <AddNote/>
  </React.Fragment> );
}

export default App;
