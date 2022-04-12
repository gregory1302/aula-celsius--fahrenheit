/* app.js */
// Opção 1: importe todo o modulo shape-area.js aqui
// Opção 2: importe as funções circleArea() e squareArea() usando a desestruturação de objetos aqui
//Use os métodos importados circleArea() e squareArea() aqui
//Imprima os valores de areaOfCircle e areaOfSquare aqui
const { circleArea, squareArea } = require('./shape-area.js');

const raio = process.argv[2];
const lado = process.argv[3];

const areaOfCircle = circleArea(raio);
const areaOfSquare = squareArea(lado);

console.log(` A area do circulo é =${areaOfCircle} `);
console.log(` A area do quadrado é =${areaOfSquare} `);




/*const raio = converters.circleArea(raio);
const lado = converters.squareArea(lado);

console.log(`AREA OF THE CIRCLE IS ${areaOfCircle}`);
console.log(`AREA OF THE SQUARE IS ${areaOfSquare}`);*/