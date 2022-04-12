const PI = Math.PI;
/* converters.js */
function circleArea(raio){
return PI * raio * raio;
}
module.exports.circleArea = circleArea;

module.exports.squareArea = function(lado) {
return lado * lado;
};