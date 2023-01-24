/*
 * 8.- Programa que calcule el MCD de una lista de enteros. No debe usar la primitiva del
 * lenguaje para ese propósito.
 * Recordar que el mcd es tomar los factores primos comunes de la desposicion 
 * de las numeros en sus factores primos
*/
const readline = require('readline-sync');

/**
 * leer numeros eneros positivos y agregarlos a una lista
 */

const generar_una_lista_con_numeros_enteros_positivos = () => {
    let lista = [];
    leer_numeros_enteros_positivos_y_colocarlos_en_una_lista(lista);
    return lista;
}

const leer_numeros_enteros_positivos_y_colocarlos_en_una_lista = (lista) => {
    let numero = readline.question('ingrese un numero entero positivo para agregarlo a la lista: ');
    if (!es_un_numero_entero_positivo(numero)) {
        return lista;
    }
    else {
        lista.push(Number(numero));
        return leer_numeros_enteros_positivos_y_colocarlos_en_una_lista(lista);
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
/**
 * Descompner en factores primos
 */

const generar_lista_con_la_desposicion_de_factores_primos_de_un_numero = (numero) => {
    if (!es_un_numero_entero_positivo(numero) && numero < 2) {
        return [];
    } else {
        return llenar_lista_con_factores_primos([], numero, 2);
    }
}

const llenar_lista_con_factores_primos = (lista, numero, counter) => {
    if (counter > numero) {
        return lista;
    } else if (es_un_numero_primo(counter) && es_un_divisor(numero, counter)) {
        lista.push(counter);
        return llenar_lista_con_factores_primos(lista, numero / counter, counter);
    } else {
        return llenar_lista_con_factores_primos(lista, numero, counter + 1);
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

/**
 * generar una lista con la descomposicion de todos los numero dentro de una lista
 */

const generar_lista_con_las_descomposiciones_de_factores_primos_una_lista_de_numero = (lista) => {
    let lista_con_despocomposiciones = [];
    lista.forEach(element => {
        lista_con_despocomposiciones.push(generar_lista_con_la_desposicion_de_factores_primos_de_un_numero(element));
    });
    return lista_con_despocomposiciones;
}

/**
 * Hallando el mcd de las descomposiciones
 */

const calcular_el_cmd = (lista_con_despocomposiciones) => {
    let max = el_max_en_la_lista_con_descomposiciones(lista_con_despocomposiciones);
    return calcular_el_cmd_auxiliar(lista_con_despocomposiciones, 1, 2, max)
}

const calcular_el_cmd_auxiliar = (lista_con_despocomposiciones, cmd, primo_actual, primo_maximo) => {
    if (primo_actual > primo_maximo) {
        return cmd;
    } else if (existe_el_factor_en_todas_las_lista(lista_con_despocomposiciones, primo_actual)) {
        let newLista = eliminar_el_factor_en_todas_las_listas(lista_con_despocomposiciones, primo_actual);
        let newCmd = cmd * primo_actual;
        return calcular_el_cmd_auxiliar(newLista, newCmd, primo_actual, primo_maximo);
    } else {
        return calcular_el_cmd_auxiliar(lista_con_despocomposiciones, cmd, siguiente_numero_primo(primo_actual), primo_maximo);
    }
}

const existe_el_factor_en_todas_las_lista = (lista_con_despocomposiciones, factor_primo) => {
    let existe_en_todas_las_listas = true;
    lista_con_despocomposiciones.forEach((lista) => {
        existe_en_esta_lista = lista.find((element) => {
            return element == factor_primo;
        });
        if (!existe_en_esta_lista) {
            existe_en_todas_las_listas = false;
        }
    });
    return existe_en_todas_las_listas;
}

const eliminar_el_factor_en_todas_las_listas = (lista_con_despocomposiciones, factor_primo) => {
    lista_con_despocomposiciones.forEach((lista) => {
        let index = lista.indexOf(factor_primo);
        lista.splice(index, 1);
    });
    return lista_con_despocomposiciones;
}

const siguiente_numero_primo = (numero) => {
    if (es_un_numero_primo(numero + 1)) {
        return numero + 1;
    } else {
        return siguiente_numero_primo(numero + 1);
    }
}

const el_max_en_la_lista_con_descomposiciones = (lista_con_despocomposiciones) => {
    let max = 0;
    lista_con_despocomposiciones.forEach((list) => {
        list.forEach((element) => {
            if (element > max) {
                max = element;
            }
        });
    });
    return max;
}

let lista = generar_una_lista_con_numeros_enteros_positivos();
console.log(lista);
let lista_con_despocomposiciones = generar_lista_con_las_descomposiciones_de_factores_primos_una_lista_de_numero(lista);
console.log('el cmd es: ' + calcular_el_cmd(lista_con_despocomposiciones));