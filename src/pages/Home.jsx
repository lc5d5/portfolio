import Footer from "../components/Footer";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Titulo from "../components/Titulo";

const Home = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <main className="bg-black min-h-screen flex items-center justify-center px-4 pb-30 relative">
        <div
          class="absolute inset-0 
    bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] 
    bg-size-[64px_64px]
    [mask-image:linear-gradient(to_bottom,black_10%,transparent_40%)]"
        ></div>
        <div className="relative z-10 flex flex-col gap-10">
          <div className="flex justify-center gap-40">
            <div className="w-40 text-soviet-grey">
              <h1 className="font-bold text-[72px]">
                <Titulo />
              </h1>
              <h2 className="text-[12px] -mt-2">ADS @ FOR-CE</h2>
            </div>
            <div className="w-130 mt-3 *:text-justify text-white">
              {lang === "pt-br" ? (
                <>
                  <p>
                    Oi! Me chamo Lucas, sou desenvolvedor full-stack
                    (frontend-leaning) com um olhar aguçado pra design, que
                    gosta de na construção.
                  </p>
                  <p className="mb-7">
                    Tenho trabalhado há mais de um ano como freelancer,
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minus velit libero provident, asperiores, sunt ad omnis
                    eligendi, sit corporis possimus recusandae facere
                    perferendis veniam voluptas modi sapiente consectetur
                    veritatis fuga.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[12px]">// welcome</p>
                  <p>
                    Hello! I'm Lucas, sou desenvolvedor full-stack
                    (frontend-leaning) com um olhar aguçado pra design, que
                    gosta de na construção.
                  </p>
                  <p className="mb-7">
                    Tenho trabalhado há mais de um ano como freelancer,
                  </p>
                  <p></p>
                </>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </main>
      <div></div>
    </>
  );
};

export default Home;
