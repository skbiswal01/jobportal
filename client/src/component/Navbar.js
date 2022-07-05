import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { Logincontext } from '../context/logincontext';

function Navbar() {
  let navigate = useNavigate();
  const {login} = useContext(Logincontext);
  return (
    <div className="Navbar">
     <div className="logo">Khageswar Job-portal</div>
     {login == false ? <div className="sign">
        <button onClick={()=>{navigate("/Login")}}>Login</button>
        <button onClick={()=>{navigate("/Signup")}}>Signup</button>
     </div>: <button onClick={()=>{navigate("/")}}>Logout</button>}
    </div>
  );
}
export default Navbar;