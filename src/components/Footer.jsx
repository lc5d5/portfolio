import { LuArrowUpRight } from "react-icons/lu";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = () => {
    const { lang, setLang } = useContext(LanguageContext);

  return (
    <footer className="bg-black border-t border-soviet-red *:font-mono *:text-xs">
      <div className="flex flex-col mx-auto w-full ">
        <div className="flex justify-start items-center min-h-17 gap-6 text-soviet-red">
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
          
          <ul className="flex *:flex gap-3 text-soviet-beige">
                    <li>
                    <a href=""
                    className="flex">Github <LuArrowUpRight className="text-soviet-red"/></a>
                    </li>
                    <li>
                    <a 
                    href=""
                    className="flex">LinkedIn <LuArrowUpRight className="text-soviet-red"/></a>
                    </li>
                  </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
