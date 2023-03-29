import './App.css'; 
import Home from './components/Home/Home';   
import Welcome from './components/Welcome/Welcome'
import { Routes, Route, } from "react-router-dom"; 
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
     <Routes> 
      <Route path='/' element ={<Welcome/>}></Route>
      <Route path = '/home' element={<Home/>}></Route> 
      <Route path='/detail/:id' element={<Detail/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
