// Ejercicio 1
// Crear una función que imprime en consola el caracter A

function imprimirA(){
    console.log('A')
}
imprimirA()

// Ejercicio 2
// Crear una función que recibe por parámetro un string y utiliza la
// función anterior para imprimir en consola:
// El caracter A en una línea, el string en otra línea, el caracter A en la última línea
//
/*
* Puede utilizar cadena para probar el ejercicio 2, el resultado en consola debería ser:
* A
* Holi
* A
*/

function imprimirCadenaConA(cadena){
    imprimirA()

    if(cadena!=='A')
    console.log(cadena)
    imprimirA()
}
const cadena='Holi'
imprimirCadenaConA(cadena)

// Ejercicio 3
// Modificar la función anterior para que si la cadena es 'A' no la imprima
// 
/*
* Puede utilizar cadena 2 para probar el ejercicio 3, el resultado en consola debería ser
* A
* A
*/
const cadena2='A'
imprimirCadenaConA(cadena2)




