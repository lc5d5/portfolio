import { LuArrowUpRight } from "react-icons/lu";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import HoverAnimado from "./HoverAnimado";

const Footer = (
  {className}
) => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <footer className="bg-black border-t border-soviet-red *:font-mono *:text-xs">
      <div className={`flex flex-col mx-auto w-full ${className}`}>
        <div className="flex justify-start items-center min-h-17 gap-6 text-soviet-red">
          {lang === "pt-br" ? (
            <>
              <span>Contato</span>
            </>
          ) : (
            <>
              <span>Socials</span>
            </>
          )}

          <ul className="flex gap-3 text-soviet-beige">
            <HoverAnimado to="https://github.com/lc5d5">Github <LuArrowUpRight className="text-soviet-red" /></HoverAnimado>
            <HoverAnimado to="/teste.pdf" className="flex">LinkedIn <LuArrowUpRight className="text-soviet-red" /></HoverAnimado>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
