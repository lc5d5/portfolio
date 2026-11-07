import { Link } from "react-router";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Titulo from "./Titulo";

const Header = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <header className="bg-black border-b border-soviet-red">
      <div className="flex flex-col mx-auto w-full max-w-4xl px-4">
        <div className="flex justify-between items-center min-h-17 text-soviet-beige">
          {lang === "pt-br" ? (
            <>
              <ul className="flex gap-3 *:font-mono *:text-xs *:relative *:m-6">
                <li className="group w-max">
                  <Link to="/projetos">Projetos</Link>
                  <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-soviet-red group-hover:w-full"></span>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="flex gap-3 *:font-mono *:text-xs">
                <li>
                  <Link to="/projetos">Projects</Link>
                </li>
                <li>
                  <Link to="./teste.pdf">Resume</Link>
                </li>
              </ul>
            </>
          )}

          <Link 
          to="/"
          className="">
            <Titulo />
          </Link>

          <div className="flex gap-3 *:font-mono *:text-xs *:cursor-pointer">
            <button
              onClick={() => {
                console.log("Clicou no PT-BR");
                setLang("pt-br");
              }}
            >
              PT-BR
            </button>
            <button
              onClick={() => {
                console.log("Clicou no EN");
                setLang("en");
              }}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
