const calc = () => {
    let avg = document.getElementById('avg');
    let sum = document.getElementById('sum');

    //Trayendo los datos del input
    const grades = document.getElementById('grades').value;
    const arr = grades.split(',');
    const newArr = arr.map((grade)=>Number(grade));



    //Empezando con los ciclos (la tarea)
    let total = 0;
    for (grade of newArr) {             // El 'for of' ejecuta el bloque por cada elemento del arreglo
        total += grade;
    }
    let average = total / newArr.length;
    average.toFixed(2);

    //Devolviendo los datos a la pagina web
    sum.innerHTML = 'Suma Total: ' + total;
    avg.innerHTML = 'Promedio: ' + average;

}