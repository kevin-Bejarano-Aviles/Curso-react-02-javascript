const personajes = ['Goku','Vegeta','Trunks'];

const [ ,,p3] = personajes;

console.log(p3);
// console.log(personajes[1]);
// console.log(personajes[2]);
const retornaArreglo = ()=>{
    return ['ABC',123];
}
const [letras,numeros] = retornaArreglo()

//TODO
// 1. el primer valor del arr se lamará nombre;
// 2. se llamará setNombre
const useState = (valor)=>{
    return [valor,()=>{console.log('Hola mundo')}];
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre,setNombre] = useState('nombre');
