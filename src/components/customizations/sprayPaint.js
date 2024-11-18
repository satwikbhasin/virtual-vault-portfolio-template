import React, { useEffect, useContext, useState } from "react";
import "../../css/customizations.css";
import { showSprayPaint, getSprayPaintColor } from "../../yourCustomizations/styling";
import { ThemeContext } from "../../services/themeContext";

const SprayPaint = () => {
    const { theme } = useContext(ThemeContext);
    const [sprayPaintColor, setSprayPaintColor] = useState(getSprayPaintColor());

    useEffect(() => {
        setSprayPaintColor(getSprayPaintColor());
    }, [theme]);

    return (
        <div
            className="spray-paint"
            style={{
                visibility: showSprayPaint ? 'visible' : 'hidden',
                '--brand-accent': `${sprayPaintColor}25`
            }}
        ></div>
    );
};

const SpacedSprayPaint = () => {
    const { theme } = useContext(ThemeContext);
    const [sprayPaintColor, setSprayPaintColor] = useState(getSprayPaintColor());

    useEffect(() => {
        setSprayPaintColor(getSprayPaintColor());
    }, [theme]);

    return (
        <div
            className="spaced-spray-paint"
            style={{
                visibility: showSprayPaint ? 'visible' : 'hidden',
                '--brand-accent': `${sprayPaintColor}25`
            }}
        ></div>
    );
};

export default SprayPaint;
export { SpacedSprayPaint };