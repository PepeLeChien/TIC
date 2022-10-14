const calc = () => {
    let finalSalaries = document.getElementById('finalSalaries');
    let totalAmount = document.getElementById('totalAmount');
    let mostAbsences = document.getElementById('mostAbsences');

    //Trayendo los datos del input
    const salary = Number(document.getElementById('salary').value);
    const absences = document.getElementById('absences').value;
    const arr = absences.split(',');
    const newArr = arr.map((sal)=>Number(sal));

    console.log(newArr);


    //Empezando con los ciclos (la tarea)

        // a) El sueldo final de cada trabajador.

        let newSalaries = []
        for (absence of newArr) {
            if (absence > 3) {
                newSalaries.push(salary - ( 30 * absence ));
            } else {
                newSalaries.push(salary)
            }
        }   
        console.log(newSalaries)

        // b) El monto total que la empresa pagó en sueldos.

        let total = 0;
        for (finalSalary of newSalaries ) {
            total += finalSalary;
        } 
    
        // c) El mayor número de faltas.
        let higherNumber = newArr[0];
        for (absence of newArr) {            
            if (higherNumber < absence) {
                higherNumber = absence;
            }
        }


    //Devolviendo los datos a la pagina web
    
    finalSalaries.innerHTML = 'Sueldo final de cada trabajador: '+ newSalaries;
    totalAmount.innerHTML = 'Monto total que la empresa pagó: S/.'+ total;
    mostAbsences.innerHTML = 'El número mayor de faltas registradas: '+ higherNumber;
}