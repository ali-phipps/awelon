import React, { useState } from "react";
import Header from "./Header";
import Footer from './Footer';
import NavBar from './Navbar/NavBar';

const Layout = (props) => (
    <div>
      <NavBar />
      {props.children}
    </div>
  );

export default Layout;