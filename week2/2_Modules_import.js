 // 내장 모듈 'path'를 import
const path = require('path');

const myFile = `./week2/2_Modules_export.js`;
const dirName = path.dirname(myFile);
const baseName = path.basename(myFile);
const extName = path.extname(myFile);

console.log(`path.dirname = ${dirName}`);
console.log(`path.basename = ${baseName}`);
console.log(`path.extname = ${extName}`);

const circularShapes = require('./2_Modules_export.js');

const r = 10;
const h = 20;

console.log(`Circumference: ${circularShapes.getCircumference(r)}`);
console.log(`Circle Area: ${circularShapes.getCircleArea(r)}`);
console.log(`Sphere Volume: ${circularShapes.getSphereVolume(r)}`);
console.log(`Cylinder Surface Area: ${circularShapes.getCylinderSurfaceArea(r, h)}`);

// Destructive assignment를 활용한 imoprt
const { getCylinderSurfaceArea } = require('./2_Modules_export.js');
console.log(`Surface Are of Cyliner = ${getCylinderSurfaceArea(r, h)}`)