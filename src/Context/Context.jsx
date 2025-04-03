
import { createContext,useEffect,useState } from "react"

const Data= createContext();

const Context = ({children}) => {

    const [cart,setCart]=useState(new Set());
    
     const addItems=(id)=>{   
        setCart((prev)=>new Set(prev).add(id));
        
     }
       useEffect(()=>{
           console.log(cart);
       },[cart]);
   
  return (
       <Data.Provider value={{cart,addItems}}>
        {children}
       </Data.Provider>
  )
}

export {Context,Data}