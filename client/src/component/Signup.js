import { useState } from "react";

function Signup() {
    const [email , setemail] = useState("")
    const [password , setpassword]=useState("");
    const [name , setname] = useState("");
    const [skill , setskill] = useState("");
    const [institute , setinsti] = useState("");

    function myfun(){
        
    }

    return (
      <div className="Signup">
             <form>
             <input type="text" placeholder="Name"  onChange={(e) => setname(e.target.value)}/>
            <input type="text" placeholder="Email"  onChange={(e) => setemail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
            <input type="text" placeholder="skills"  onChange={(e) => setskill(e.target.value)}/>
            <input type="text" placeholder="college"  onChange={(e) => setinsti(e.target.value)}/>
            <button type="submit" onClick={()=>{myfun()}}>Signup</button> 
        </form>
      </div>
    );
  }
  
  export default Signup;