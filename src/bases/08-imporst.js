import { heroes } from './data/heroes'

export const getHeroeById = (id)=>{
    const heroe = heroes.find(heroe=>heroe.id===id)
    return heroe
}

// console.log(getHeroeById(2));

export const getHeroesByOwner =  (owner) =>{
    const heroesOwner = heroes.filter(heroe=>heroe.owner===owner)
    return {heroesOwner}
}
// console.log(getHeroesByOwner('DC'));


