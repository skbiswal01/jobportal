import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
