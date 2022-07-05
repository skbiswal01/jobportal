import { createContext,useState } from "react";



const Logincontext = createContext();

const Loginprovider = ({children}) => {
    const [login, setlogin] = useState(false);
    function Logoutfun(todo) {
        setlogin(false);
    }
    function Loginfun(todo) {
        setlogin(true);
    }
 return (
     <Logincontext.Provider value ={{login, Loginfun,Logoutfun}}>{children}</Logincontext.Provider>
 )
} 
export {Loginprovider, Logincontext};