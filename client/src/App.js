import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Homescreen from './screens/homescreen';
import {BrowserRouter as Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
    
      <Route path="/home" exact component={Homescreen}/>
    
      </Routes>

        
      
    </div>
  );
}

export default App;
