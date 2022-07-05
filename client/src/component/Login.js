import {useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    const [email , setemail] = useState("")
    const [password , setpassword]=useState("");
    const myfun = async (e) => {
        e.preventDefault();
        const response = await fetch("https://jobportalsk.vercel.app/api/auth/login", {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email , password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 

        }
        else{
        }
    }

  return (
    <div className="Login">
            <form>
            <input type="text" placeholder="Email"  onChange={(e) => setemail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
            <button type="submit" onClick={()=>{myfun()}}>Login</button> 
        </form>
    </div>
  );
}

export default Login;