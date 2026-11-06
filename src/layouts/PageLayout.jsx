import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const PageLayout = () => {
    return ( 
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
     );
}
 
export default PageLayout;