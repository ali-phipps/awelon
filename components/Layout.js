import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = (props) => {
    const [name, setName] = useState("Paul")
    return (
        <div>
            <NavBar/>
            <Header/>

            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout