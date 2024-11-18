import React from "react";
import { footer } from "../yourCustomizations/footer";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                {footer.linesAboveLinks.map((line) => <p>{line}</p>)}
                <p>
                    {footer.links.map((link) => (
                        <Link to={link.path}>{link.text}</Link>
                    ))}
                </p>
                {footer.linesBelowLinks.map((line) => <p>{line}</p>)}
            </div>
        </div>
    );
};

export default Footer;