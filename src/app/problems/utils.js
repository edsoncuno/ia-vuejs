const readline = require('readline-sync');

/**
 * mostrar lista
 */

export const mostrarLista = (lista) => {
    console.log('inicio de la lista');
    lista.forEach(element => {
        console.log(element);
    });
    console.log('fin de la lista');
}

/**
 * es un numero entero mayor a cero
 */

export const esUnNumeroEnteroPositivo = (numero) => {
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
 * es un numero entero mayor igual a cero
 */

export const esUnNumeroEnteroNoNegativo = (numero) => {
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

/**
 * numeros primos
 */

const siguienteNumeroPrimo = (numero) => {
    if (esUnNumeroPrimo(numero + 1)) {
        return numero + 1;
    } else {
        return siguienteNumeroPrimo(numero + 1);
    }
}

export const esUnNumeroPrimo = (numero) => {
    if (isNaN(numero)) {
        return false;
    } else if (numero % 1 != 0) {
        return false;
    } else if (numero <= 1) {
        return false;
    } else {
        return no_tiene_divisores_aparte_de_el_mismo(numero, numero - 1);
    }
}

const noTieneDivisoresAparteDeElMismo = (numero, divisor) => {
    if (divisor == 1) {
        return true;
    } else if (esUnDivisor(numero, divisor)) {
        return false;
    } else {
        return noTieneDivisoresAparteDeElMismo(numero, divisor - 1);
    }
}

const esUnDivisor = (numero, divisor) => {
    return (numero % divisor == 0);
}

/**
 * 
 */

const generarUnaListaConNumerosEnterosNoNegativos = () => {
    let lista = [];
    leerNumerosEnterosNoNegativosAndColocarlosEnUnaLista(lista);
    return lista;
}

const leerNumerosEnterosNoNegativosAndColocarlosEnUnaLista = (lista) => {
    let numero = readline.question('ingrese un numero para agregarlo a la lista: ');
    if (!esUnNumeroEnteroNoNegativo(numero)) {
        return lista;
    }
    else {
        lista.push(Number(numero));
        leerNumerosEnterosNoNegativosAndColocarlosEnUnaLista(lista);
    }
}

/**
 * generar una lista de 
 */

export const generar_una_lista_con_numeros_enteros_positivos = () => {
    let lista = [];
    console.log('se empieza a agregar numeros enteros positivos a una lista');
    leer_numeros_enteros_positivos_y_colocarlos_en_una_lista(lista);
    console.log('se termino de agregar numeros enteros positivos a la lista');
    console.log('La lista de numeros enteros positivos es: ' + lista);
    return lista;
}

const leer_numeros_enteros_positivos_y_colocarlos_en_una_lista = (lista) => {
    let numero = readline.question('ingrese un numero entero positivo para agregarlo a la lista: ');
    if (!es_un_numero_entero_positivo(numero)) {
        return lista;
    } else {
        lista.push(Number(numero));
        return leer_numeros_enteros_positivos_y_colocarlos_en_una_lista(lista);
    }
}

/**
 * generar una lista
 */

export const generarUnaLista = (message, callback) => {
    let list = [];
    console.log(message);
    console.log('se empieza a agregar numeros a una lista');
    readAndInsertIntoList(list, callback);
    console.log('se termino de agregar numeros a la lista');
    return list;
}

const readAndInsertIntoList = (list, callback) => {
    let number = readline.question('ingrese un numero para agregarlo a la lista: ');
    if (callback(number)) {
        return list;
    } else {
        list.push(Number(numero));
        return readAndInsertIntoList(list);
    }
}
