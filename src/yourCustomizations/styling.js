import { getBrandAccent } from "./brand";

/**
 * Determines whether the cubic wave graphic at the bottom of the page is shown or not.
 * @type {boolean}
 * @default true
 */
export const showCubeWave = true;

/**
 * The color of the cubic wave graphic at the bottom of the page.
 * @type {string}
 * @default brandAccent
 */
export const getCubeWaveColor = () => {
    return getBrandAccent();
};

/**
 * Determines whether the dotted background is shown or not.
 * @type {boolean}
 * @default true
 */
export const showDottedBackground = true;

/**
 * The color of the dots in the dotted background.
 * @type {string}
 * @default brandAccent
 */
export const getDottedBackgroundColor = () => {
    return getBrandAccent();
};

/**
 * Determines whether the spray paint at corner of the page is shown or not.
 * @type {boolean}
 * @default true
 */
export const showSprayPaint = false;

/**
 * The color of the spray pain.
 * @type {string}
 * @default brandAccent
 */
export const getSprayPaintColor = () => {
    return getBrandAccent();
}