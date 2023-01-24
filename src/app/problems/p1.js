/**
 * Programa que llena y muestra una lista de números, elemento por elemento, cada
 * elemento es un número no negativo. La lista se llena hasta que el usuario introduce un
 * número negativo, el cual no debe formar parte de la lista y sirve sólo para indicarle al
 * programa que el ingreso ha terminado. La lista se muestra elemento por elemento, cada
 * uno en una fila.
 */

const readline = require('readline-sync');

const generarUnaListaConNumerosEnterosNoNegativos = () => {
    let lista = [];
    leerNumerosEnterosNoNegativosAndColocarlosEnUnaLista(lista);
    return lista;
}

const leerNumerosEnterosNoNegativosAndColocarlosEnUnaLista = (lista) => {
    let numero = readline.question('ingrese un numero entero no negativo para gregarlo a la lista: ');
    if (!esUnNumeroEnteroNoNegativo(numero)) {
        return lista;
    }
    else {
        lista.push(Number(numero));
        leerNumerosEnterosNoNegativosAndColocarlosEnUnaLista(lista);
    }
}

const esUnNumeroEnteroNoNegativo = (numero) => {
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

const mostrarLista = (lista) => {
    console.log('inicio de la lista');
    lista.forEach(element => {
        console.log(element);
    });
    console.log('fin de la lista');
}

let lista = generarUnaListaConNumerosEnterosNoNegativos();
mostrarLista(lista);