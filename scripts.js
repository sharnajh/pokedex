// mew: https://pokeapi-nycda.firebaseio.com/pokemon/151.json
// gengar: https://pokeapi-nycda.firebaseio.com/pokemon/94.json
// clefairy: https://pokeapi-nycda.firebaseio.com/pokemon/35.json

let canvas = document.getElementById("canvas");
let myHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let start = document.getElementById("start-button");

canvas.style.height = `${myHeight}px`;


let mew = document.getElementById("mew"),
gengar = document.getElementById("gengar"),
clefairy = document.getElementById("clefairy");

// mew vars
axios.get('https://pokeapi-nycda.firebaseio.com/pokemon/151.json').then((response) => {
    let mewData = response.data;
    let mewName = mewData.name;
    let mewSprite = mewData.sprites.front_default;
    let mewId = mewData.game_indices[0].game_index;
    let mewAbility = mewData.abilities[0].ability.name;
    let mewHp = mewData.stats[5].base_stat;
    let mewAttk = mewData.stats[4].base_stat;
    let mewDef = mewData.stats[3].base_stat;
    console.log(mewData);

    mew.insertAdjacentHTML('afterbegin',`
    <img class="sprite" src="${mewSprite}">
    <ul>
    <li><h1 class="pkmn-name">${mewName}<h1></li>
    <li><h1 class="id">#${mewId}</h1></li>
    </ul>
    <p class="ability">Ability: ${mewAbility}</p>
    <ul id="base-stats">
    <li><p class="hp">HP: ${mewHp}</p></li>
    <li><p class="attk">Attack: ${mewAttk}</p></li>
    <li><p class="def">Defense: ${mewDef}</p></li>
    </ul>
    `)
});

// gengar vars
axios.get('https://pokeapi-nycda.firebaseio.com/pokemon/94.json').then((response) => {
    let gengarData = response.data;
    let gengarName = gengarData.name;
    let gengarSprite = gengarData.sprites.front_default;
    let gengarId = gengarData.game_indices[0].game_index;
    let gengarAbility = gengarData.abilities[0].ability.name;
    let gengarHp = gengarData.stats[5].base_stat;
    let gengarAttk = gengarData.stats[4].base_stat;
    let gengarDef = gengarData.stats[3].base_stat;
    console.log(gengarData);

    gengar.insertAdjacentHTML('afterbegin',`
    <img class="sprite" src="${gengarSprite}">
    <h1 class="pkmn-name">${gengarName}<h1>
    <h1 class="id">#${gengarId}</h1>
    <p class="ability">Ability: ${gengarAbility}</p>
    <ul>
    <li><p class="hp">HP: ${gengarHp}</p></li>
    <li><p class="attk">Attack: ${gengarAttk}</p></li>
    <li><p class="def">Defense: ${gengarDef}</p></li>
    </ul>
    `)
});

// clefaity vars
axios.get('https://pokeapi-nycda.firebaseio.com/pokemon/35.json').then((response) => {
    let clefData = response.data;
    let clefName = clefData.name;
    let clefSprite = clefData.sprites.front_default;
    let clefId = clefData.game_indices[0].game_index;
    let clefAbility = clefData.abilities[0].ability.name;
    let clefHp = clefData.stats[5].base_stat;
    let clefAttk = clefData.stats[4].base_stat;
    let clefDef = clefData.stats[3].base_stat;
    console.log(clefData);

    clefairy.insertAdjacentHTML('afterbegin',`
    <img class="sprite" src="${clefSprite}">
    <h1 class="pkmn-name">${clefName}<h1>
    <h1 class="id">#${clefId}</h1>
    <p class="ability">Ability: ${clefAbility}</p>
    <p class="hp">HP: ${clefHp}</p>
    <p class="attk">Attack: ${clefAttk}</p>
    <p class="def">Defense: ${clefDef}</p>
    `)
});

$(document).ready(function(){
    $("#start-button").click(function(){
        $("#mew").show();
    });
});
