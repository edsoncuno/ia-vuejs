/*
 * 5.- Programa que obtiene una lista con los números primos menores o iguales a un entero
 * positivo determinado.
 */
const readline = require('readline-sync');

const generar_una_lista_con_los_primos_menores_o_igual_a_un_entero_no_negativo = () => {
    let numero = readline.question('ingrese un numero entero mayor a uno para generar la lista con los primos menores o igual a el: ');
    if (!es_un_numero_entero_mayor_a_uno(numero)) {
        return [];
    }
    else {
        return agregar_a_una_lista_los_numeros_primos_menores_o_iguales_a_un_numero([], numero, 2);
    }
}

const es_un_numero_entero_mayor_a_uno = (numero) => {
    if (!es_un_numero_entero_no_negativo) {
        return false;
    } else if (numero <= 1) {
        return false;
    } else {
        return true;
    }
}

const agregar_a_una_lista_los_numeros_primos_menores_o_iguales_a_un_numero = (lista, numero, contador) => {
    if (contador > numero) {
        return lista;
    }
    else if (es_un_numero_primo(contador)) {
        lista.push(contador);
        return agregar_a_una_lista_los_numeros_primos_menores_o_iguales_a_un_numero(lista, numero, contador + 1);
    } else {
        return agregar_a_una_lista_los_numeros_primos_menores_o_iguales_a_un_numero(lista, numero, contador + 1);
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

const es_un_numero_primo = (numero) => {
    if (!es_un_numero_entero_no_negativo) {
        return false;
    } else if (numero <= 1) {
        return false;
    }
    else {
        return no_tiene_divisores_aparte_de_el_mismo(numero, numero - 1);
    }
}

const es_un_divisor = (numero, divisor) => {
    return (numero % divisor == 0);
}

const no_tiene_divisores_aparte_de_el_mismo = (numero, divisor) => {
    if (divisor == 1) {
        return true;
    } else if (es_un_divisor(numero, divisor)) {
        return false;
    } else {
        return no_tiene_divisores_aparte_de_el_mismo(numero, divisor - 1);
    }
}

const mostrar_lista_elemento_por_elemento = (lista) => {
    console.log('inicio de la lista');
    lista.forEach(element => {
        console.log(element);
    });
    console.log('fin de la lista');
}

let lista = generar_una_lista_con_los_primos_menores_o_igual_a_un_entero_no_negativo();
mostrar_lista_elemento_por_elemento(lista);