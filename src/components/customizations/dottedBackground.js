import React, { useContext, useEffect, useState } from "react";
import "../../css/customizations.css";
import { showDottedBackground, getDottedBackgroundColor } from "../../yourCustomizations/styling";
import { ThemeContext } from "../../services/themeContext";

const DottedBackground = () => {
    const { theme } = useContext(ThemeContext);
    const [dottedBackgroundColor, setDottedBackgroundColor] = useState(getDottedBackgroundColor());

    useEffect(() => {
        setDottedBackgroundColor(getDottedBackgroundColor());
    }, [theme]);

    return (
        <div className="dotted-background" style={{
            visibility: showDottedBackground ? 'visible' : 'hidden',
            "--dotted-background-color": `${dottedBackgroundColor}25`
        }}>
        </div>
    );
};

export default DottedBackground;