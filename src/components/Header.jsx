import { Link } from "react-router";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Titulo from "./Titulo";

const Header = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <header className="border-b border-gray-600">
      <div className="flex flex-col mx-auto w-full max-w-2xl px-4">
        <div className="flex justify-between items-center min-h-17">
          {lang === "pt-br" ? (
            <>
              <ul className="flex gap-3 *:font-mono *:text-xs">
                <li>
                  <Link to="/projetos">Projetos</Link>
                </li>
                <li>
                  <Link to="./teste.pdf">Currículo</Link>
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

          <Link to="/">
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
