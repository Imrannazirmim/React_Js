
import { createContext, use } from "react";


export const BioContext = createContext()

export const BioProvider = ({children}) => {

    const myName = 'imran nazir mim ';
    const myAge = 22;


    return (
      <BioContext.Provider value={{ myName, myAge }}>
        {children}
      </BioContext.Provider>
    );
}


//custom hooks

export const useBioContext = ()=>{
  const context = use(BioContext);
  return context;
}