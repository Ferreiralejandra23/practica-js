
min=360*5;
max=360*10;
graInicial=Math.random()*360;
numRan=(Math.floor(Math.random() * (max - min + 1) ) + min);
console.log("Posición o ángulo Inicial "+ graInicial);
console.log("Valor Aleatorio Generado en Grados: "+ numRan);
angulo=numRan%360;
console.log("Ángulo Final: "+angulo);
