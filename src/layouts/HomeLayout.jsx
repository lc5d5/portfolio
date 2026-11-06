import { Outlet } from "react-router";
import Header from "../components/Header";
import { useState } from "react";

const HomeLayout = () => {
    return ( 
        <>
            <Header />
            <Outlet />
        </>
     );
}
 
export default HomeLayout;