/*
 * llenar y muestra una lista como en el problema 1 y mostrar el promedio de los
 * elementos.
 */

const readline = require('readline-sync');

const generar_una_lista_con_numeros_enteros_no_negativos = () => {
    let lista = [];
    leer_numeros_enteros_no_negativos_y_colocarlos_en_una_lista(lista);
    return lista;
}

const leer_numeros_enteros_no_negativos_y_colocarlos_en_una_lista = (lista) => {
    let numero = readline.question('ingrese un numero entero no negativo para gregarlo a la lista: ');
    if (!es_un_numero_entero_no_negativo(numero)) {
        return lista;
    }
    else {
        lista.push(Number(numero));
        leer_numeros_enteros_no_negativos_y_colocarlos_en_una_lista(lista);
    }
}
const es_un_numero_entero_no_negativo = (numero) => {
    if (isNaN(numero)) {
        return false;
    }
    else if (numero < 0) {
        return false;
    }
    else if (numero % 1 != 0) {
        return false;
    }
    else {
        return true;
    }
}

const mostrar_lista_elemento_por_elemento = (lista) => {
    console.log('inicio de la lista');
    lista.forEach(element => {
        console.log(element);
    });
    console.log('fin de la lista');
}

const mostrar_promedio_de_una_lista_de_numeros_enteros_no_negativos = (lista) => {
    let sumatoria = lista.reduce((acumulador, element) => { return acumulador + element; }, 0);
    console.log('El promedio de la lista es: ' + sumatoria);
}

let lista = generar_una_lista_con_numeros_enteros_no_negativos();
mostrar_lista_elemento_por_elemento(lista);
mostrar_promedio_de_una_lista_de_numeros_enteros_no_negativos(lista);