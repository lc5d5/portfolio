import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function AlterarIdioma({ children }) {
    const [lang, setLang] = useState("pt-br");

    return ( 
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
     );
}