import React, { useState, useContext } from 'react';
import { Copy } from 'lucide-react';
import { ThemeContext } from '../../services/themeContext';

const ContactCard = ({
    contact,
    index,
    setCopiedProperty,
    setShowToast
}) => {
    const [transform, setTransform] = useState({});
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { brandAccent } = useContext(ThemeContext);

    const handleMouseMove = (e, index) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = x - centerX;
        const deltaY = y - centerY;
        const rotateX = (deltaY / centerY) * 10;
        const rotateY = (deltaX / centerX) * -10;

        setTransform((prev) => ({
            ...prev,
            [index]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }));
    };

    const handleMouseLeave = (index) => {
        setTransform((prev) => ({
            ...prev,
            [index]: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        }));
        setHoveredIndex(null);
    };

    const handleCopy = (value, type) => {
        navigator.clipboard.writeText(value).then(() => {
            setCopiedProperty(type);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }).catch((err) => {
            console.error('Failed to copy: ', err);
        });
    };
    return (
        <div
            key={index}
            className="contact-card"
            style={{ transform: transform[index] }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onClick={() => window.open(contact.link, "_blank")}
        >
            <div
                className="card-actions"
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                {hoveredIndex === index && (
                    <Copy
                        size={18}
                        onClick={(event) => {
                            event.stopPropagation();
                            handleCopy(contact.displayValue, contact.type);
                        }}
                        cursor={"pointer"}
                        color={brandAccent}
                    />
                )}
            </div>
            <div className="contact-card-body">
                <div className="contact-type">
                    {contact.icon}
                    <div className="contact-font contact-type-font">{contact.type}</div>
                </div>
                <div className="contact-value">
                    <p className="contact-font contact-value-font">{contact.displayValue}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;