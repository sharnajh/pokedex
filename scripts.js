// mew: https://pokeapi-nycda.firebaseio.com/pokemon/151.json
// gengar: https://pokeapi-nycda.firebaseio.com/pokemon/94.json
// clefairy: https://pokeapi-nycda.firebaseio.com/pokemon/35.json

let canvas = document.getElementById("canvas");
let myHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let start = document.getElementById("start-button");

canvas.style.height = `${myHeight}px`;

// mew
axios.get('https://pokeapi-nycda.firebaseio.com/pokemon/151.json').then((response) => {
    let mewData = response.mewData;
    let mewName = mewData.name;
    let mewSprite = mewData.sprites.front_default;
    let mewId = mewData.game_indices[0].game_index;
    let mewAbility = mewData.abilities[0].ability.name;
    let mewHp = mewData.stats[5].base_stat;
    let mewAttk = mewData.stats[4].base_stat;
    let mewDef = mewData.stats[3].base_stat;
})

// gengar
axios.get('https://pokeapi-nycda.firebaseio.com/pokemon/94.json').then((response) => {
    let gengarData = response.gengarData;
    let gengarName = gengarData.name;
    let gengarSprite = gengarData.sprites.front_default;
    let gengarId = gengarData.game_indices[0].game_index;
    let gengarAbility = gengarData.abilities[0].ability.name;
    let gengarHp = gengarData.stats[5].base_stat;
    let gengarAttk = gengarData.stats[4].base_stat;
    let gengarDef = gengarData.stats[3].base_stat;
})

// clefaity
axios.get('https://pokeapi-nycda.firebaseio.com/pokemon/35.json').then((response) => {
    let clefData = response.clefData;
    let clefName = clefData.name;
    let clefSprite = clefData.sprites.front_default;
    let clefId = clefData.game_indices[0].game_index;
    let clefAbility = clefData.abilities[0].ability.name;
    let clefHp = clefData.stats[5].base_stat;
    let clefAttk = clefData.stats[4].base_stat;
    let clefDef = clefData.stats[3].base_stat;
})