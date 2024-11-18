import React from "react";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import "../css/general.css";
import CubeWave from "./customizations/cubeWave.js";
import DottedBackground from "./customizations/dottedBackground.js";
import { ThemeProvider } from "../services/themeContext.js";

const Layout = ({ children }) => {
    return (
        <ThemeProvider>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' }}>
                <Navbar />
                <div className="base-container" style={{ flex: '1 0 auto' }}>
                    {children}
                </div>
                <DottedBackground />
                <CubeWave />
                <Footer />
            </div>
        </ThemeProvider >
    );
};

export default Layout;