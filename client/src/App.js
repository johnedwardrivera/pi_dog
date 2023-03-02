import './App.css'; 
import Home from './components/Home/Home';   
import Welcome from './components/Welcome/Welcome'
import { Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes> 
      <Route path='/' element ={<Welcome/>}></Route>
      <Route path = '/home' element={<Home/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
