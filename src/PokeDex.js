import {Pokedex} from 'pokeapi-js-wrapper';

const pokedex = new Pokedex({
    protocol: 'https',
    cacheImages: true,
    cache: true,
    timeout: 5000,
});

export default pokedex;
