import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import HomeLayout from "../layouts/HomeLayout";

const Rotas = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Home/>} />
                </Route>

                <Route path="/" element={<PageLayout />}>
                    <Route path="/projetos" element={<Projetos />} />
                </Route>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Rotas;