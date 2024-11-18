import React, { useState, useContext, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { about } from "../yourCustomizations/aboutPage";
import "../css/about.css";
import { ThemeContext } from "../services/themeContext";
import { Link } from "react-router-dom";

const AboutView = () => {
    const [typingDone, setTypingDone] = useState(sessionStorage.getItem('hasSeenAboutPageAnimation'));
    const { brandAccent } = useContext(ThemeContext);
    const letterCountRef = useRef(0);

    useEffect(() => {
        const hasSeenAnimation = sessionStorage.getItem('hasSeenAboutPageAnimation');
        if (hasSeenAnimation) {
            setTypingDone(true);
        } else {
            letterCountRef.current = 0;
        }
    }, []);

    const handleType = () => {
        letterCountRef.current += 1;
        if (letterCountRef.current === about.topSection.heading.length) {
            setTimeout(() => {
                setTypingDone(true);
                sessionStorage.setItem('hasSeenAboutPageAnimation', 'true');
            }, 500);
        }
    };

    return (
        <div className="about-page-container">
            <section className="top-section">
                <div className="top-section-text">
                    <h2 className="top-section-heading typewriter">
                        {typingDone ? (
                            about.topSection.heading
                        ) : (
                            <Typewriter
                                words={[about.topSection.heading]}
                                loop={1}
                                cursor={!typingDone}
                                cursorStyle="|"
                                typeSpeed={40}
                                onType={handleType}
                                cursorBlinking={false}
                                cursorColor={brandAccent}
                            />
                        )}
                    </h2>
                    <p className={`top-section-subtext ${typingDone ? 'visible' : ''}`}>
                        {about.topSection.subtext}
                    </p>
                    <div className={`top-section-buttons ${typingDone ? 'visible' : ''}`}>
                        <Link to={about.topSection.buttons.primary.path}>
                            <button className="primary-button">{about.topSection.buttons.primary.text}</button>
                        </Link>
                        <Link to={about.topSection.buttons.secondary.path}>
                            <button className="secondary-button" style={{ color: brandAccent, border: `${brandAccent} 0.6px solid` }}>{about.topSection.buttons.secondary.text}</button>
                        </Link>
                    </div>
                </div>
                <div className={`image-gallery ${typingDone ? 'visible' : ''}`}>
                    <div className="image-first">
                        <img src={about.topSection.images.first} alt="first" />
                    </div>
                    <div className="image-right">
                        <div className="image-second">
                            <img src={about.topSection.images.second} alt="second" />
                        </div>
                        <div className="image-third">
                            <img src={about.topSection.images.third} alt="third" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`features-section ${typingDone ? 'visible' : ''}`}>
                {about.features.map((feature, index) => (
                    <div
                        className="feature-card"
                        key={index}
                        style={{
                            "--brand-accent": `${brandAccent}25`,
                        }}
                    >
                        <h3>
                            {feature.title.split('').map((char, i) => (
                                <span
                                    key={i}
                                    style={{
                                        color: /\d|[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(char) ? brandAccent : 'inherit',
                                        fontWeight: /\d|[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(char) ? '800' : 'normal'
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default AboutView;