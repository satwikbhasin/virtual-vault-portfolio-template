// Usage: This file is used to change the names and icons of navbar items on your website.
// Note: To update the footer links, use the footer.js file in the same directory.

import { Globe, SquareStack, IdCard } from 'lucide-react';

/**
 * The configuration for the contact details page in the navbar.
 * @type {Object}
 * @property {string} name - The name of the page.
 * @property {JSX.Element} icon - The icon for the page.
 */
export const contactPageConfig = {
    name: 'Contact Us',
    icon: <IdCard size={18} strokeWidth={2} />,
};


/**
 * The configuration for the about your brand page in the navbar.
 * @type {Object}
 * @property {string} name - The name of the page.
 * @property {JSX.Element} icon - The icon for the page.
 */
export const aboutPageConfig = {
    name: 'About',
    icon: <Globe size={18} strokeWidth={2} />
};


/**
 * The configuration for the products/items page in the navbar.
 * @type {Object}
 * @property {string} name - The name of the page.
 * @property {JSX.Element} icon - The icon for the page.
 */
export const productsPageConfig = {
    name: 'Products',
    icon: <SquareStack size={18} strokeWidth={2} />,
};