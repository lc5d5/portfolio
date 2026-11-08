import { Link } from "react-router";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Titulo from "./Titulo";
import HoverAnimado from "./HoverAnimado";
import ButtonAnimado from "./ButtonAnimado";

const Header = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <header className="bg-black border-b border-soviet-red">
      <div className="flex flex-col mx-auto w-full max-w-4xl px-4">
        <div className="flex justify-between items-center min-h-17 text-soviet-beige">
          {lang === "pt-br" ? (
            <>
              <ul className="flex gap-3 *:font-mono *:text-xs *:relative *:m-6">
                <HoverAnimado to="/projetos">Projetos</HoverAnimado>
                <HoverAnimado to="/teste.pdf">Currículo</HoverAnimado>
              </ul>
            </>
          ) : (
            <>
              <ul className="flex gap-3 *:font-mono *:text-xs">
                <HoverAnimado to="/projetos">Projects</HoverAnimado>
                <HoverAnimado to="/teste.pdf">Resume</HoverAnimado>
              </ul>
            </>
          )}

          <Link 
          to="/"
          className="">
            <Titulo />
          </Link>

          <div className="flex gap-3 *:font-mono *:text-xs *:cursor-pointer">
            <ButtonAnimado onClick={() => {
                setLang("pt-br");
              }}
            >
              PT-BR
            </ButtonAnimado>
            <ButtonAnimado onClick={() => {
                setLang("en");
              }}
            >
              EN
            </ButtonAnimado>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
