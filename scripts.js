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

    mew.insertAdjacentHTML('beforeend',`
    <div class="container">
    <div class="row">
        <div class="col-sm-2"><img class="sprite" src="${mewSprite}"></div>
        <div class="col-sm-5"><ul>
    <li><h1 class="pkmn-name">${mewName}</h1></li>
    <li><h1 class="id">#${mewId}</h1></li>
    </ul></div>
    </div>
    <div class="row">
        <div class="col-md-12"><p class="ability"><b>Ability:</b> ${mewAbility}</p></div>
    </div>
    <div class="row">
        <div class="col-md-12"><ul id="base-stats">
    <li><p class="hp"><b>HP:</b> ${mewHp}</p></li>
    <li><p class="attk"><b>Attack:</b> ${mewAttk}</p></li>
    <li><p class="def"><b>Defense:</b> ${mewDef}</p></li>
    </ul></div>
    </div>
    </div>
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

    gengar.insertAdjacentHTML('beforeend',`
    <div class="container">
    <div class="row">
        <div class="col-sm-2"><img class="sprite" src="${gengarSprite}"></div>
        <div class="col-sm-5"><ul>
    <li><h1 class="pkmn-name">${gengarName}</h1></li>
    <li><h1 class="id">#${gengarId}</h1></li>
    </ul></div>
    </div>
    <div class="row">
        <div class="col-md-12"><p class="ability"><b>Ability:</b> ${gengarAbility}</p></div>
    </div>
    <div class="row">
        <div class="col-md-12"><ul id="base-stats">
    <li><p class="hp"><b>HP:</b> ${gengarHp}</p></li>
    <li><p class="attk"><b>Attack:</b> ${gengarAttk}</p></li>
    <li><p class="def"><b>Defense:</b> ${gengarDef}</p></li>
    </ul></div>
    </div>
    </div>
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

    clefairy.insertAdjacentHTML('beforeend',`
    <div class="container">
    <div class="row">
        <div class="col-sm-2"><img class="sprite" src="${clefSprite}"></div>
        <div class="col-sm-5"><ul>
    <li><h1 class="pkmn-name">${clefName}</h1></li>
    <li><h1 class="id">#${clefId}</h1></li>
    </ul></div>
    </div>
    <div class="row">
        <div class="col-md-12"><p class="ability"><b>Ability:</b> ${clefAbility}</p></div>
    </div>
    <div class="row">
        <div class="col-md-12"><ul id="base-stats">
    <li><p class="hp"><b>HP:</b> ${clefHp}</p></li>
    <li><p class="attk"><b>Attack:</b> ${clefAttk}</p></li>
    <li><p class="def"><b>Defense:</b> ${clefDef}</p></li>
    </ul></div>
    </div>
    </div>
    `)
});

$( "#start-button" ).click(function() {     
    $('#menu').toggle("slow");
    $('#start').toggle();
 });

 $( "#mew-select" ).click(function() {     
    $('#mew').toggle("slow");
    $('#menu').toggle();
 });

 $( "#gengar-select" ).click(function() {     
    $('#gengar').toggle("slow");
    $('#menu').toggle();
 });

 $( "#clefairy-select" ).click(function() {     
    $('#clefairy').toggle("slow");
    $('#menu').toggle();
 });

 $( "#m-exit" ).click(function() {  
    $('#mew').toggle();  
    $('#menu').toggle("slow");
 });

 $( "#g-exit" ).click(function() {  
    $('#gengar').toggle();  
    $('#menu').toggle("slow");
 });

 $( "#c-exit" ).click(function() {  
    $('#clefairy').toggle();  
    $('#menu').toggle("slow");
 });