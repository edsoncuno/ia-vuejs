/*
 * 4.- Programa que llena y muestra una lista como en 1. Obtiene una lista con los mismos
 * elementos, pero con los elementos impares a la izquierda y los pares a la derecha.
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

const es_un_numero_par = (numero) => {
    return numero % 2 == 0 ? true : false;
}

const ordenar_lista_impares_a_la_izquierda_y_pares_a_la_derecha = (lista) => {
    let lista_de_impares = [];
    let lista_de_pares = [];
    lista.forEach((element) => {
        if (es_un_numero_par(element)) {
            lista_de_pares.push(element);
        }
        else {
            lista_de_impares.push(element);
        }
    });
    return lista_de_impares.concat(lista_de_pares);
}

let lista = generar_una_lista_con_numeros_enteros_no_negativos();
mostrar_lista_elemento_por_elemento(lista);
lista = ordenar_lista_impares_a_la_izquierda_y_pares_a_la_derecha(lista);
mostrar_lista_elemento_por_elemento(lista);