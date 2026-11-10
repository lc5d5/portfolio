import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageLayout = () => {
    return ( 
        <>
            <Header />
            <Outlet />
            <Footer
            className="max-w-4xl px-9 h-screen" />
        </>
     );
}
 
export default PageLayout;