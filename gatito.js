//variables
let michiPancita = 0;
let pescaditos = 8; 
let pollito = 10; 
let snack = 15;
let input = 0;
let cantidad = 0;

//funciones
function llenarMichiPancita(n){
    return michiPancita += cantidad*n;
}

//programita
alert(`Te encontraste un gatito hambriento 🐈 y menos mal que siempre llevás pescadito, sobres de pollito y snacks en la mochila! (lo típico, claro)`);
do {
    input = prompt(`Tenés:\n${pescaditos} pescaditos \n${pollito} sobres de pollito \n${snack} snacks. 
    \nAlimenta al gatito eligiendo con atención qué le das de comer porque su michi-pancita se llena al llegar a 100 y no todos los alimentos suman la misma cantidad 👀 Tené cuidado, no te pases o va a explotar de lo gordito! \n¿Qué le das al michi? \n1 - Pescadito \n2 - Sobre de pollito \n3 - Snack \n0 - No me gustan los gatos porque no tengo corazón, que lo alimente otro`)
    if(input == 1){
        cantidad = prompt('Cuántos pescaditos? 🐠');

        if (cantidad<=pescaditos && pescaditos!=0){
            pescaditos -= cantidad; 
            llenarMichiPancita(5);
            alert(`Alimentaste al gatito con ${cantidad} pescaditos y su michi-pancita está en: ${michiPancita}/100`);
        }
        else {
            alert('ya no te quedan pescaditos!');
        };
    }

    else if(input == 2){
        cantidad = prompt('Cuántos sobres de pollito? 🍗');

        if (cantidad<=pollito && pollito!=0){
            pollito -= cantidad; 
            llenarMichiPancita(21);
            alert(`Alimentaste al gatito con ${cantidad} sobres de pollito y su michi-pancita está en: ${michiPancita}/100`);
        }
        else {
            alert('ya no te quedan sobres de pollito!');
        };  
    }

    else if(input == 3){
        cantidad = prompt('Cuántos snacks? 🥓');

        if (cantidad<=snack && snack!=0){
            snack -= cantidad; 
            llenarMichiPancita(3);
            alert(`Alimentaste al gatito con ${cantidad} snacks y su michi-pancita está en: ${michiPancita}/100`);
        }
        else {
            alert('ya no te quedan snacks!');
        };  
    }

    else if (input == 0){
        break;
    }
    else{
        alert('Ingresá una opción correcta');
    }

console.log(`michi-pancita: ${michiPancita}/100`);
}

while(michiPancita<100)

if(michiPancita==100){
    alert('Alimentaste al gatito!! Como ya no te necesita te ignora y se va corriendo a dominar otra mente humana');
}
else if (input== 0){
    alert('Igual tampoco le gustabas al gatito');
}
else{
    alert('NOOOOOO 💥 Explotó el gatito!!! 💥 \n(mentira sólo quedó llenito pero para ponerle más dramatismo) \nIntentalo de nuevo!');
};


