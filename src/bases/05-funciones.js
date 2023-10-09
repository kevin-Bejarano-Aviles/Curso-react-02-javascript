// const saludar = function( nombre ){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`
}
const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );

// TODO
// 1. Transformen a una función de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

const getUsuarioActivo =( nombre )=>(
    {
        uid: 'ABC567',
        username: nombre,
    }
)
const usuarioActivo = getUsuarioActivo('Kevin');
console.log(usuarioActivo);