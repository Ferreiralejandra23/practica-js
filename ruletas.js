
min=37*5;
max=37*10;
numRan=(Math.floor(Math.random() * (max - min + 1) ) + min);
numCayo=numRan%37;

for(i=1;i<11;i++){
    console.log("Nro de Juego: "+i);
    console.log("Valor Aleatorio Generado: "+numRan);
    console.log("Nro que cayó en la ruleta: "+numCayo);
    console.log("\n");
}