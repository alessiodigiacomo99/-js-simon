$(function(){
    //Un alert espone 5 numeri casuali diversi.
    function controllo(numero, array){
        var stampo = true;
        for (var j = 0; j < array.length; j++){
            if (numero == array[j]){
                stampo = false;
                i--;
            }
        }
        if (stampo){
            array.push(numero);
        }
    }
    var arrayRandom = [];
    for(var i = 0; i < 5; i++){
        var nRandom = Math.ceil(Math.random() * 10);
        controllo(nRandom, arrayRandom);
    }
    alert(arrayRandom);   
    // Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    var punteggio = 0;
    setTimeout(function(){
        for(var i = 0; i < 5; i++){
            var numeroSimon = Number(prompt("Quale numero c'era?"));
            for (var j = 0; j < arrayRandom.length; j++){
                if (numeroSimon == arrayRandom[j]){
                    punteggio += 1;
                }
            }
        }
        // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
        console.log(punteggio);
    },3000);
});