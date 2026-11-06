import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext();

export function AlterarIdioma({ children }){
    const [lang, setLang] = useState("pt-br");
    console.log("O Provider renderizou com a língua:", lang);

    return ( 
        <LanguageContext.Provider value={{ lang, setLang }}>
            { children }
        </LanguageContext.Provider>
     );
}

export const usarAlterarIdioma = () => useContext(LanguageContext);