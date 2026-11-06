import { LuArrowUpRight } from "react-icons/lu";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = () => {
    const { lang, setLang } = useContext(LanguageContext);

  return (
    <footer className="border-t border-gray-600 *:font-mono *:text-xs">
      <div className="flex flex-col mx-auto w-full max-w-2xl">
        <div className="flex justify-start items-center min-h-17 gap-3">
          {
            lang === "pt-br" ? (
              <>
                <span>Contato</span>
              </>
            ) : (
            <>
              <span>Socials</span>
            </>)
          }
          
          <ul className="flex *:flex gap-3">
                    <li>
                    <a href="" className="flex">Github <LuArrowUpRight className="text-amber-700"/></a>
                    </li>
                    <li>
                    <a href="">LinkedIn</a>
                    </li>
                  </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
