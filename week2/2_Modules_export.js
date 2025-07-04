/**
 * Modules: Modules are similar to libraries
 */

const { get } = require("lodash");

// Creating module
const PI = 3.141592653589793;
const round = (num) => Math.round(num * 100) / 100;
const getCircumference = (radius) => round(2 * PI * radius);
const getCircleArea = (radius) => round(PI * radius ** 2);
const getCylinderSurfaceArea = (radius, height) => {
    const circleArea = getCircleArea(radius);
    const sideArea = getCircumference(radius) * height;
    return round(2 * circleArea + sideArea);
};

// Exporting module
module.exports = {
    getCircumference: getCircumference,
    getCircleArea: getCircleArea,
    getCylinderSurfaceArea: getCylinderSurfaceArea,
    getSphereVolume: (radius) => round(4 * PI * radius ** 3 / 3),
};