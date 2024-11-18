import React from 'react';

/**
 * Determines whether the brand's icon is shown or not.
 * @default true
 */
export const showBrandIcon = true;

/**
 * The React component for your brand's icon in light mode.
 * @type {JSX.Element}
 */
export const brandIconLightMode = (
    <img src={`${process.env.PUBLIC_URL}/logoLightMode.png`} alt="Logo" width="30" height="30" />
);

/**
 * The React component for your brand's icon in dark mode.
 * @type {JSX.Element}
 */
export const brandIconDarkMode = (
    <img src={`${process.env.PUBLIC_URL}/logoDarkMode.png`} alt="Logo" width="30" height="30" />
);


/**
 * Determines whether the name of the brand is shown or not.
 * @default true
 */
export const showBrandName = true;

/**
 * The name of your brand.
 * @type {string}
 */
export const brandName = "Vinyl Garage Ltd.";

/**
 * The brand's accent color for light mode.
 * Must be a valid hex color code.
 * @type {string}
 */
export const brandAccentLightMode = "#EA8A00";

/**
 * The brand's accent color for dark mode.
 * Must be a valid hex color code.
 * @type {string}
 */
export const brandAccentDarkMode = "#D47D00";







































// Do not modify below this line

/**
 * Function to get the brand icon based on the current theme
 * @returns {JSX.Element} - The brand icon
 */
export const getBrandIcon = () => {
    const theme = localStorage.getItem('themePreference') || 'dark';
    return theme === 'dark' ? brandIconDarkMode : brandIconLightMode;
};

/**
 * Function to get the brand accent color based on the current theme
 * @returns {string} - The brand accent colorÏ
 */
export const getBrandAccent = () => {
    const theme = localStorage.getItem('themePreference') || 'dark';
    return theme === 'dark' ? brandAccentDarkMode : brandAccentLightMode;
};
