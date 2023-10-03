array=[];
for (n=0;n<37;n++){
    array.push(n)
}
for (i=1;i<11;i++){
    val=Math.floor(Math.random()*(370-185+1)+185);
    num=val%37;
    console.log("Nro de juego: "+i);
    console.log("Valor Aleatorio Generado: "+val);
    console.log("Nro que cayó la ruleta: "+num);
    console.log("...");
}