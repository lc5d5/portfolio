import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";

const Rotas = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home/>} />
                    <Route path="/projetos" element={<Projetos />} />
                </Route>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Rotas;