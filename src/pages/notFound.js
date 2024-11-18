import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "../css/general.css";

function NotFound() {
    return (
        <div className="notFound-page-container">
            <img src="/not-found.png" alt="No Results" className="notFound-image" />
            <h3>404 - How did you get here?</h3>
            <Link to="/about" className="back-button">
                <ArrowLeft size={18} />
                Guide Me Back
            </Link>
        </div>
    );
}

export default NotFound;