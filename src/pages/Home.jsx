import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext"; // Ajuste o caminho se necessário

const Home = () => {
    // Puxa o contexto DIRETAMENTE, sem o hook customizado
    const context = useContext(LanguageContext);
    
    console.log("O que tem no contexto da Home:", context);

    if (!context) return <p>Erro: Contexto não encontrado!</p>;

    return (
        <div>
            <h1>Língua atual: {context.lang}</h1>
            <button onClick={() => context.setLang(context.lang === "pt-br" ? "en" : "pt-br")}>
                Alternar
            </button>
        </div>
    );
};

export default Home;