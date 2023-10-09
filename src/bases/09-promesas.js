import { getHeroeById } from "./bases/08-imporst";

// const promesa = new Promise( (resolve,reject)=>{

//     setTimeout(() => {
//         //TODO
//         const heroe = getHeroeById(2);
//         resolve(heroe)
//         // console.log(heroe);
//     //    console.log('2 segundos despues'); 
//         // resolve()
//     }, 2000);

// });

// promesa.then( (heroe)=>{
//     console.log(heroe);
//     // console.log('Then de la promesa');
// })
// .catch(err=>console.warn(err))

const getHeroeByIdAsync = ( id ) =>{
    return new Promise( (resolve,reject)=>{

        setTimeout(() => {
            //TODO
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe)
            }else{
                reject('No se pudo encontrar el héroe');
            }
            // resolve(heroe)
            // console.log(heroe);
        }, 2000);
    
    });
}
getHeroeById(4)
    .then(console.log)
    // .then(heroe => console.log('Heroe',heroe))
    .catch(err => console.log(err));