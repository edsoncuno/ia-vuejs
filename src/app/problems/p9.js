/**
 * 9.- Programa que calcule el MCM de una lista de enteros. No debe usar la primitiva del
 * lenguaje para ese propósito.
 * 
 * El minimo com multiplo, listar los multiplos de todos los numeros
 * n, 2n, 3n, 4n, ... y asi para todos los numeros e identificar el
 * multiplo comun para toos ellos. Puede que haya varios asi que el que se
 * elige es el menor de todos ellos, minimo comun multiplo.
 * 
 * Tamien se peude desponer en factores primos todos los numeros, 
 * diviendo con el factor primo todos los numeros que se puedan y
 * si no hay ninguno divisible, se para al siguiente primo
 * hasta que todos los numero hayan queda en 1
 */
//const primo = require('./../utils/primo');
const generar_una_lista_con_numeros_enteros_positivos = require('../../utils/lista_de_numeros');

let lista = generar_una_lista_con_numeros_enteros_positivos();