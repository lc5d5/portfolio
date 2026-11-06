import { Link } from "react-router";

const Header = ({lang, setLang}) => {
  return (
    <header className="border-b border-gray-600">
      <div className="flex flex-col mx-auto w-full max-w-2xl px-4">
        <div className="flex justify-between items-center min-h-17">
          <ul className="flex gap-3 *:font-mono *:text-xs">
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="./teste.pdf">Curriculum</Link>
            </li>
          </ul>
          <Link to="/"><h1>título</h1></Link>

        <div className="flex gap-3 *:font-mono *:text-xs *:cursor-pointer">
            <button
            onClick={() => setLang("pt-br")}
            className="">PT-BR</button>
            <button
            onClick={() => setLang("en")}>EN</button>
        </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
