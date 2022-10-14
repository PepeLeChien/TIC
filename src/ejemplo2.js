const calc = () => {
    let apr = document.getElementById('apr');
    let noapr = document.getElementById('noapr');

    //Trayendo los datos del input
    const grades = document.getElementById('grades').value;
    const arr = grades.split(',');
    const newArr = arr.map((grade)=>Number(grade));

    console.log(newArr);


    //Empezando con los ciclos (la tarea)
    let aprobados = 0;
    let noAprobados = 0;
    for (grade of newArr) {             // El 'for of' ejecuta el bloque por cada elemento del arreglo
        if (grade < 11) {
            noAprobados += 1;
        } else {
            aprobados += 1;
        }
    }
    

    //Devolviendo los datos a la pagina web
    apr.innerHTML = 'Aprobados: ' + aprobados;
    noapr.innerHTML = 'Desaprobados: ' + noAprobados;

}