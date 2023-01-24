/*
 * 7.- Programa que dado un entero positivo, muestra sus factores primos. Por ejemplo, si el
 * número es 12, entonces la salida es 2 3.
 */
const readline = require('readline-sync');

const generar_lista_con_los_factores_primos_de_un_numero_entero_positivo = () => {
    let numero = readline.question('ingrese un numero entero positivo para generar una lista con sus factores primos: ');
    if (!es_un_numero_entero_positivo(numero)) {
        return [];
    }
    else {
        return llenar_lista_con_factores_primos([], numero, 2);
    }
}

const es_un_numero_entero_positivo = (numero) => {
    if (isNaN(numero)) {
        return false;
    } else if (numero % 1 != 0) {
        return false;
    } else if (numero < 1) {
        return false;
    } else {
        return true;
    }
}

const llenar_lista_con_factores_primos = (lista, numero, counter) => {
    if (counter > numero) {
        return lista;
    } else if (es_un_numero_primo(counter) && es_un_divisor(numero, counter)) {
        lista.push(counter);
        numero = dividir_hasta_que_ya_no_sea_divisor(numero, counter);
        return llenar_lista_con_factores_primos(lista, numero, counter + 1);
    } else {
        return llenar_lista_con_factores_primos(lista, numero, counter + 1);
    }
}

const dividir_hasta_que_ya_no_sea_divisor = (numero, divisor) => {
    if (!es_un_divisor(numero, divisor)) {
        return numero;
    } else {
        return dividir_hasta_que_ya_no_sea_divisor(numero/divisor, divisor);
    }
}

const es_un_numero_primo = (numero) => {
    if (!es_un_numero_entero_positivo) {
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

let lista = generar_lista_con_los_factores_primos_de_un_numero_entero_positivo();
mostrar_lista_elemento_por_elemento(lista);