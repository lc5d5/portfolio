import Footer from "../components/Footer";
import { usarAlterarIdioma } from "../contexts/LanguageContext";

const Home = () => {
    const { lang, setLang } = usarAlterarIdioma();
    console.log("Oi, estou lendo a língua", lang)
    
    return ( 
        <>
            <main className="min-h-screen flex items-center justify-center px-4">
                <div className="flex justify-center gap-20">
                    <div>
                        <h1 className="font-bold text-[64px]">Lucas</h1>
                        <h2 className="text-[12px] -mt-4">ADS @ FOR-CE</h2>
                    </div>
                    <div className="w-150">
                        {lang === "pt-br" ? (
                            <>
                                    <p className="text-[12px]">// bem-vindo</p>
                                    <p>Oi! Me chamo Lucas, sou desenvolvedor full-stack (frontend-leaning) com um olhar aguçado pra design, que gosta de na construção.</p>
                                    <p className="mb-7">Tenho trabalhado há mais de um ano como freelancer,</p>
                                    <p></p>
                                    <Footer />
                            </>
                        ) : (
                            <>
                                <p className="text-[12px]">// welcome</p>
                                <p>Hello! I'm Lucas, sou desenvolvedor full-stack (frontend-leaning) com um olhar aguçado pra design, que gosta de na construção.</p>
                                <p className="mb-7">Tenho trabalhado há mais de um ano como freelancer,</p>
                                <p></p>
                                <Footer />
                            </>
                        )}
                    </div>

                            <div>
            {/* BOTÃO DE TESTE NA HOME */}
            <button onClick={() => setLang("en")} className="bg-red-500 p-2 text-white cursor-pointer">
                Mudar pra Inglês (Pela Home)
            </button>

            <h1>{lang === "pt-br" ? "Português" : "English"}</h1>
        </div>   
                </div>
            </main>
            <div>
            </div>
        </>
     );
}
 
export default Home;