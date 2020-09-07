// Ejercicio 1
// Función que recibe un arreglo por parámetro e imprime en consola:
// Los elementos son: A,B,C. Esos son los elementos
// Donde A,B,C son los elementos del arreglo
// Ojo con que hay comas entre los elementos y un punto al final de los elementos también
// Ojo con los espacios
/*
 * Puede utilizar arr1 para probar el ejercicio 1, el resultado en consola debería ser:
 * Los elementos son: 1,2,3,4,5. Esos son los elementos
 */
const arr1 = [1, 2, 3, 4, 5];

function arrPrinter(arr) {
  return arr.toString();
}

console.log("Sol 1: Los elementos son: " + arrPrinter(arr1));

// Ejercicio 2
// Función que recibe un arreglo de números por parámetro e imprime en consola el promedio
// geométrico de los elementos (buscar en wiki ggg)
// Pro Tip: Revisar la función 'reduce' de un arreglo
// Pro Tip: Buscar como en js elevar un exponente y sacar una raíz n-sima
// Pro Tip: Sacar raíces y elevación a un exponente son lo mismo, buscar cómo elevar a un exponente en javascript entonces
/**
 * También puede utilizar arr1 para probar el ejercicio 2, el resultado en consola debería ser
 * 2.6051710846974. Verificar en la página http://www.alcula.com/calculators/statistics/geometric-mean/
 */

function geoMean(arr) {
  return Math.pow(
    arr.reduce((total, value) => total * value),
    1 / arr.length
  );
}

console.log("Sol 2: " + geoMean(arr1));

// Ejercicio 3
// Modificar la función anterior para que en caso de recibir algo que no es un número (un string, null, undefined, boolean)
// tire un error
// Pro Tip: Buscar como en js verificar si una variables es un número
// Pro Tip: Buscar como en js tirar un error
/*
 * Puede utilizar arr2 para probar el ejercicio 3, debería tirar un error
 */
const arr2 = [3, 4, false, 1, 2, 5];
function geoMeanWithVerification(arr) {
  return Math.pow(
    arr.reduce(function (total, value, index) {
      if (!Number.isInteger(value)) {
        //throw "Sol 3: The element with index " + index + " is not an integer";
      } else {
        return total * value;
      }
    }),
    1 / arr.length
  );
}

console.log("Sol 3: " + geoMeanWithVerification(arr2));

// Ejercicio 4
// Función que recibe un string de números separados por coma y con un número indefinido de espacios
// y utiliza la función anterior para calcular la media geométrica de los mismos
/*
 * Puede utilizar cadena para probar el ejercicio 4. El resultado nuevamente debería ser
 * 2.6051710846974
 */
const cadena = "5,4,3,2,1";
function stringToIntArr(str) {
  const numArr = str
    .replace(/\s/g, "") //Quito espacios
    .split(",") //Lo convierto en arreglo
    .map((str) => parseInt(str)); //lo transformo en números
  return geoMeanWithVerification(numArr);
}

console.log("Sol 4: " + stringToIntArr(cadena));

// Ejercicio 5
// Función que recibe un arreglo de elementos y devuelve un string de estos elementos separados por coma
// Note que no deben haber comas ni al principio ni al final, solo entre los elementos
/*
 * Igualmente puede utilizar arr1 para probar el ejercicio 5. Puede incluso utilizar
 * el resultado de este ejercicio como entrada para el ejercicio 4
 */
console.log("Sol 5: " + arrPrinter(arr1));

// Ejercicio 6
// La función anterior debe funcionar con un arreglo vacío o con un arreglo de un solo elemento
console.log("Sol 6: " + arrPrinter(arr1));

// Ejercicio 7
// La función del ejercicio 4 debe funcionar con números decimales y enteros por igual
// Los espacios vacíos entre comas deben ser interpretados como un 0.
// Puede utilizar cadena 2 para probar el ejercicio 7
// Pro Tip: No es ni parseInt ni parseFloat, hay otra manera más directa de convertir algo a un número en js

const cadena2 = "5,4,,2,1";
function ceroStringToIntArr(str) {
  return geoMeanWithVerification(str.split(",").map((str) => Number(str)));
}

console.log("Sol 7: " + ceroStringToIntArr(cadena2));
