const calc = () => {
    let fact = document.getElementById('fact');

    //Trayendo los datos del input
    const number = document.getElementById('grade').value;


    //Empezando con los ciclos (la tarea)
    let factorial = 1
    for (let i=1; i <= number; i++) {             
        factorial = factorial * i;
    }
    

    //Devolviendo los datos a la pagina web
    fact.innerHTML = 'Factorial: ' + factorial;

}