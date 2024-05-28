

export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
const nombre = 'Irwin';
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );