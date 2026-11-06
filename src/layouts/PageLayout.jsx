import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const PageLayout = () => {
    const [lang, setLang] = useState("pt-br")

    return ( 
        <>
            <Header lang={lang} setLang={setLang} />
            <Outlet context={{ lang, setLang }} />
            <Footer />
        </>
     );
}
 
export default PageLayout;