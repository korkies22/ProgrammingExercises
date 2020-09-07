// Ejercicio 1
// Función que recibe un arreglo de 2 arreglos e imprime en cada línea los 
// elementos en la misma posición separados por ': '
// Ejemplo: [[A,B,A],[1,2,3]] debería imprimir:
// A: 1
// B: 2
// A: 3
/*
* Puede utilizar arr1 para probar el ejercicio 1, el resultado en consola debería ser:
* Juliana: Azul
* Carlos: Rojo
* Juliana: Amarillo
*/
const arr1=[['Juliana','Carlos','Juliana'],['Azul','Rojo','Amarillo']]

// Ejercicio 2
// Función que recibe un arreglo de 2 arreglos, y devuelve un arreglo de objetos 
// donde ahora el primer arreglo represente las llaves y el segundo arreglo represente el valor
// Ejemplo: [[A,B,A],[1,2,3]] debería devolver:
// [{A:1},{B:2},{A:3}]
/*
* Puede utilizar arr2 para probar el ejercicio 3, note que al utilizar el ejercicio 3
* se debería tener como resultado algo igual a arr1
*/
const arr2=[{'Juliana':'Azul'},{'Carlos':'Rojo'},{'Juliana':'Amarillo'}]

/*
* Este arreglo también se puede utilizar para los bonos 1 y 4
*/

// Ejercicio 3
// Función que ahora realiza el proceso inverso de la función anterior
// Ejemplo: [{A:1},{B:2},{A:3}] debería devolver:
// [[A,B,A],[1,2,3]]
// Pro Tip: Buscar la función Object.entries

// Ejercicio 4
// Función que recibe un arreglo de arreglos, toma la primera fila como llaves
// y crea objetos dependiendo con las demás filas como valores de esos objetos
// Ejemplo: [[A,B,C],[1,2,3],[4,5,6],[7,8,9]] debería devolver:
// [{A:1,B:2,C:3},{A:4,B:5,C:6},{A:7,B:8,C:9}]
// Pro Tip: Guardar el primer arreglo interno como header, y recorrer este para cada uno de los otros arreglos
// Pro Tip: Puede crear una función independiente que reciba un arreglo de llaves y un arreglo de valores para crear el objeto
// Pro Tip: Verificar la función Object.fromEntries

// Ejercicio 5
// Función que realiza el proceso inverso de la función anterior
// Ejemplo: [{A:1,B:2,C:3},{A:4,B:5,C:6},{A:7,B:8,C:9}] debería devolver:
// [[A,B,C],[1,2,3],[4,5,6],[7,8,9]]
// Pro Tip: Crear primero el primer sub arreglo (los headers) y luego por cada uno de los objetos
// crear los demás sub arreglos
// Pro Tip: Puede crear una función independiente que reciba un objeto y devuelva las llaves como objetos
// Pro Tip: Revisar la función Object.keys y Object.values


// Ejercicio 6 BONO1
// Crear una función que reciba un arreglo y para cada elemento guardar un objeto
// con el valor del objeto y la posición de ese objeto en el arreglo
// Ejemplo: [A,B,A] debería devolver:
// [{position:0, value:A}, {position:1, value:B}, {position:2, value:A}]

// Ejercicio 7 BONO2
// Crear una función que reciba un arreglo de objetos con el formato anterior en desorden y cree un arreglo
// de elementos ordenados por position
// Ejemplo:  [ {position:2, value:A}, {position:0, value:A}, {position:1, value:B}] debería devolver:
// [A,B,A]
/**
 * Puede utilizar arr3 para probar el bono2
 */
const arr3=[{'value':'Carlos',position:1},{'value':'Juliana',position:2},{'value':'Juliana',position:0}]

// Ejercicio 8 BONO3
// Modificar o crear una función similar a la del BONO2, pero que ahora reciba otro arreglo adicional por parámetro
// y devuelva los elementos de ese arreglo ordenados con base en las posiciones del primer arreglo
// Ejemplo: ([ {position:2, value:X}, {position:0, value:X}, {position:1, value:X}],[1,2,3]) debería devolver:
// [3,1,2]
// Nota: El 3 se puso al principio porque estaba en la posición 2 del segundo arreglo y ahora pasó a la posición 0 (Porque el primer elemento del primer arreglo dice position 2)
// El 1 se puso en la mitad porque estaba en la posición 0 del segundo arreglo y ahora se pasa a la posición 1 (Porque el segundo elemento del primer arreglo dice position 0)
// El 2 se puso al final porque estaba en la posición 1 del arreglo y ahora se pasa a la 2 (Porque el tercer elemento del primer arreglo dice position 1)
/**
 * Puede utilizar arr3 en conjunto con arr4 para probar el bono3
 */
 const arr4=['Azul','Rojo','Amarillo']

// Ejercicio 9 BONO4
// Modificar la función 1 para que la impresión se haga ordenada por índice:
// Ejemplo: [[A,B,A],[1,2,3]] debería imprimir:
// A: 1
// A: 3
// B: 2
// Pro Tip: Buscar como ordenar un arreglo en js
// Pro Tip: Utilizar las funciones anteriores